import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user';
import { AvatarComponent } from '../../atoms/avatar/avatar.component';
import { HttpClientModule } from '@angular/common/http';
import { UserProfileSectionComponent } from '../../organisms/user-profile-section/user-profile-section.component';
import { InputFieldComponent } from '../../atoms/input-field/input-field.component';
import { PromoSectionComponent } from "../../organisms/promo-section/promo-section.component";
import { Promo } from '../../../models/promo';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  standalone: true,
  providers: [HttpClientModule],
  imports: [ReactiveFormsModule, UserProfileSectionComponent, PromoSectionComponent]

})
export class UserProfileComponent {
  promoMembers: User[] = [];
  selectedPromo!: Promo; 
  userId!: number | null; 
  currentUser!: User;

  constructor(private userService: UserService, private authService: AuthService) {}

  ngOnInit(): void {
    this.getUserPromos();
  }

  // Fonction pour récupérer les promos de l'utilisateur
  private getUserPromos(): void {
    this.userId = this.authService.getCurrentUserId();
    console.log('Id de l\'utilisateur:', this.userId); 
    if(this.userId) {
      this.userService.getUserById(this.userId).subscribe({
        next: (user: User) => {
          this.currentUser = user;
          console.log('Utilisateur récupéré:', user);
        },
        error: (error) => {
          console.error('Erreur lors de la récupération de l\'utilisateur:', error);
        }
      });
    }
  }
}
