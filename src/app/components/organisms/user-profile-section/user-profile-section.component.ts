import { Component, Input, OnInit } from '@angular/core';
import { AvatarComponent } from '../../atoms/avatar/avatar.component';
import { InputFieldComponent } from '../../atoms/input-field/input-field.component';
import { UserService } from '../../../services/user.service';
import { SubtitleComponent } from '../../atoms/subtitle/subtitle.component';
import { User } from '../../../models/user';

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
  currentUser!: User;

  constructor(private userService: UserService) 
              {}

  ngOnInit(): void {
    this.currentUser = this.userService.getUser()();
    this.populateUserInfo();
  }

  private populateUserInfo(): void {
    this.avatarSrc = this.currentUser.avatarUrl || 'assets/default-avatar.png';
    this.firstName = this.currentUser.firstName || '';
    this.lastName = this.currentUser.lastName || '';
    this.phoneNumber = this.currentUser.phoneNumber || '';
    this.email = this.currentUser.email || '';
    this.odysseyLink = this.currentUser.odysseyLink || '';
    this.role = this.currentUser.role || '';
  }
          
}
