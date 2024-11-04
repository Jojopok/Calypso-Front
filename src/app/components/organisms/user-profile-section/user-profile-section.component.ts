import { Component, Input } from '@angular/core';
import { AvatarComponent } from '../../atoms/avatar/avatar.component';
import { UserInfoGroupComponent } from '../../molecules/user-info-group/user-info-group.component';

@Component({
  selector: 'app-user-profile-section',
  standalone: true,
  imports: [AvatarComponent, UserInfoGroupComponent],
  templateUrl: './user-profile-section.component.html',
  styleUrl: './user-profile-section.component.scss'
})
export class UserProfileSectionComponent {
  @Input() avatarSrc: string = '';
}
