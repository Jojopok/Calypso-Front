import { Component, OnInit } from '@angular/core';
import { AvatarComponent } from '../../atoms/avatar/avatar.component';
import { InputFieldComponent } from '../../atoms/input-field/input-field.component';
import { UserService } from '../../../services/user.service';
import { SubtitleComponent } from '../../atoms/subtitle/subtitle.component';
import { User } from '../../../models/user';
import { UserUpdateDTO } from '../../../models/userUpdateDTO';
import { debounceTime, Subject, switchMap } from 'rxjs';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-user-profile-section',
  standalone: true,
  imports: [AvatarComponent, InputFieldComponent, SubtitleComponent],
  templateUrl: './user-profile-section.component.html',
  styleUrls: ['./user-profile-section.component.scss']
})
export class UserProfileSectionComponent implements OnInit {
  avatarSrc: string = '';
  firstName: string = '';
  lastName: string = '';
  phoneNumber: string = '';
  email: string = '';
  odysseyLink: string = '';
  role: string = '';
  currentUser!: User;

  private userChangeSubject = new Subject<void>();  // Un subject pour capturer les changements
  private delayTime = 900; // Le délai de debounce en millisecondes
  
  constructor(private userService: UserService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.userService.getUser()();
    this.populateUserInfo();

     // On s'abonne au subject pour déclencher l'appel API après un délai
     this.userChangeSubject.pipe(
      debounceTime(this.delayTime),  
      switchMap(async () => this.updateUserProfile())  
    ).subscribe();
  }

  private populateUserInfo(): void {
    this.avatarSrc = this.currentUser.avatarUrl || 'assets/default-avatar.png';
    this.firstName = this.currentUser.firstName || '';
    this.lastName = this.currentUser.lastName || '';
    this.phoneNumber = this.currentUser.phoneNumber || '';
    this.email = this.currentUser.email || '';
    this.odysseyLink = this.currentUser.odysseyLink || '';
    this.role = this.currentUser.roles[0] || '';
  }

  // Méthode pour mettre à jour les données de l'utilisateur
  onUserChange(event: any, field: string): void {
    const value = event.target.value;
    
    switch(field) {
      case 'firstName':
        this.firstName = value;
        break;
      case 'lastName':
        this.lastName = value;
        break;
      case 'phoneNumber':
        this.phoneNumber = value;
        break;
      case 'email':
        this.email = value;
        break;
      case 'odysseyLink':
        this.odysseyLink = value;
        break;
      // Ne rien faire pour 'role' si c'est désactivé
    }

    // Notifier le subject pour déclencher l'appel après un délai
    this.userChangeSubject.next();
  }

  // Méthode appelée à chaque changement de valeur d'un input
  updateUserProfile(): void {
    const updatedUser: UserUpdateDTO = {
      firstName: this.firstName,
      lastName: this.lastName,
      phoneNumber: this.phoneNumber,
      email: this.email,
      odysseyLink: this.odysseyLink
    };

    // Appeler le service pour mettre à jour l'utilisateur
    this.userService.updateUser(updatedUser, this.currentUser.id).subscribe(
      (response) => {
        console.log('User updated successfully:', response);
      },
      (error) => {
        console.error('Error updating user:', error);
      }
    );
  }
}
