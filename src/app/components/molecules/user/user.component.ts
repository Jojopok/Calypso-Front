import { Component, Input } from '@angular/core';
import { AvatarComponent } from '../../atoms/avatar/avatar.component';
import { TextComponent } from '../../atoms/text/text.component';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [AvatarComponent, TextComponent, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input() avatarSrc?: string; 
  @Input() altText!: string;   
  @Input() isCollapsed: boolean = false; 
  @Input() userName: string = ''

  firstName: string = ''; 
  lastName: string = '';

  constructor(private userService: UserService,
              private authService: AuthService
  ) {}

  ngOnInit(): void { 
    if (!this.userName) {
    this.populateUserInfo(); // Si userName n'est pas fourni, récupère depuis l'API
    }
  }

  private populateUserInfo(): void {
    // Tenter de récupérer l'utilisateur depuis le token JWT
    const userId = this.authService.getCurrentUserId();

    if (userId) {
        // Appel au backend pour récupérer toutes les informations utilisateur
        this.userService.getUserById(userId).subscribe({
            next: (userInfo) => {
              
                this.firstName = userInfo.firstName || '';
                this.lastName = userInfo.lastName || '';
                this.userName = `${this.firstName} ${this.lastName}`.trim(); 
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
