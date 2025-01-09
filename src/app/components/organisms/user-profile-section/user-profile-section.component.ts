import { Component, Input, OnInit } from '@angular/core';
import { AvatarComponent } from '../../atoms/avatar/avatar.component';
import { InputFieldComponent } from '../../atoms/input-field/input-field.component';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';
import { SubtitleComponent } from '../../atoms/subtitle/subtitle.component';

@Component({
  selector: 'app-user-profile-section',
  standalone: true,
  imports: [AvatarComponent, InputFieldComponent, SubtitleComponent],
  templateUrl: './user-profile-section.component.html',
  styleUrl: './user-profile-section.component.scss'
})
export class UserProfileSectionComponent implements OnInit{
  avatarSrc: string = '';
  firstName: string = '';
  lastName: string = '';
  phoneNumber: string = '';
  email: string = '';
  odysseyLink: string = '';
  role: string = '';

  constructor(private authService: AuthService,
              private userService: UserService) 
              {}

  ngOnInit(): void {
    this.populateUserInfo();
  }
  private populateUserInfo(): void {
    // Tenter de récupérer l'utilisateur depuis le token JWT
    const userId = this.authService.getCurrentUserId();

    if (userId) {
        // Appel au backend pour récupérer toutes les informations utilisateur
        this.userService.getUserById(userId).subscribe({
            next: (userInfo) => {
                this.avatarSrc = userInfo.avatarUrl || 'assets/default-avatar.png';
                this.firstName = userInfo.firstName || '';
                this.lastName = userInfo.lastName || '';
                this.phoneNumber = userInfo.phoneNumber || '';
                this.email = userInfo.email || '';
                this.odysseyLink = userInfo.odysseyLink || '';
                this.role = userInfo.role || '';
            },
            error: (error) => {
                console.error('Erreur lors de la récupération des informations utilisateur :', error);
            }
        });
    } else {
        console.warn('Aucun ID utilisateur trouvé dans le token.');
    }
  }
}
