import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputFieldComponent } from '../../atoms/input-field/input-field.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { TitleComponent } from '../../atoms/title/title.component';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { AppToastService } from '../../../services/app-toast.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, InputFieldComponent, ButtonComponent, TitleComponent, CommonModule],
})
export class RegisterFormComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private toastService: AppToastService) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      odysseyLink: ['', Validators.required],
      password: ['', [
        Validators.required, 
        Validators.minLength(8),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$')
      ]],
    });
  }

  get firstName() {
    return this.registerForm.get('firstName');
  }

  get lastName() {
    return this.registerForm.get('lastName');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }


  onSubmit(): void {
    // Marquer tous les champs comme touchés pour afficher les erreurs
    this.registerForm.markAllAsTouched();
    
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      this.authService.register(formData).subscribe({
        next: () => {
          this.toastService.showSuccess('Success', 'Votre compte a été créé avec succès !');
          this.router.navigate(['/']);
        },
        error: (err) => {
          this.toastService.showDanger('Error', 'Votre comtpe n\'a pas pu être créé !');
          // Gérer les erreurs serveur ici (ex: email déjà utilisé)
        }
      });
    } else {
      this.toastService.showDanger('Error', 'Veuillez remplir tous les champs correctement');
    }
  }
}
  