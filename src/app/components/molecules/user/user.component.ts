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
  @Input() userName!: string;

  firstName: string = ''; 
  lastName: string = '';
  currentUser!: User;

  constructor(private userService: UserService) {}

  ngOnInit(): void { 
    this.currentUser = this.userService.getUser()();
     // Si un `userName` est fourni, on l'utilise, sinon on utilise les informations du `currentUser`
    if (!this.userName || this.userName.trim() === '') {
      this.populateUserInfo();
    }
  }

  private populateUserInfo(): void {
    this.userName = `${this.currentUser.firstName} ${this.currentUser.lastName}`;
  }
}
