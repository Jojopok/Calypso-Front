import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user';
import { AvatarComponent } from '../../atoms/avatar/avatar.component';
import { HttpClientModule } from '@angular/common/http';
import { UserProfileSectionComponent } from '../../organisms/user-profile-section/user-profile-section.component';
import { InputFieldComponent } from '../../atoms/input-field/input-field.component';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [UserProfileSectionComponent],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  standalone: true,
  providers: [HttpClientModule],
  imports: [ReactiveFormsModule, UserProfileSectionComponent, InputFieldComponent, AvatarComponent]
})
export class UserProfileComponent implements OnInit {
  userForm: FormGroup;
  userAvatarUrl: string = ''; // URL de l'avatar utilisateur

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private authService: AuthService
  ) {
    this.userForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      phoneNumber: [''],
      email: [''],
      odysseyProfile: [''],
      role: ['']
    });
  }

  ngOnInit(): void {
    const userId = this.authService.getCurrentUserId(); // Récupération de l'ID utilisateur à partir du JWT
    if (userId) {
      this.userService.getUserById(userId).subscribe(
        (userData: User) => {
          this.userForm.patchValue({
            firstName: userData.firstName,
            lastName: userData.lastName,
            phoneNumber: userData.phoneNumber,
            email: userData.email,
            odysseyProfile: userData.odysseyProfile,
            role: userData.role
          });
          this.userAvatarUrl = userData.avatarUrl || 'path/to/default-avatar.jpg';
        },
        (error: Error) => {
          console.error('Erreur lors de la récupération des données utilisateur', error);
        }
      );
    } else {
      console.error('Utilisateur non authentifié ou ID introuvable');
    }
  }
}
