import { Component, Input } from '@angular/core';
import { AvatarComponent } from '../../atoms/avatar/avatar.component';
import { InputFieldComponent } from '../../atoms/input-field/input-field.component';

@Component({
  selector: 'app-user-profile-section',
  standalone: true,
  imports: [AvatarComponent, InputFieldComponent],
  templateUrl: './user-profile-section.component.html',
  styleUrl: './user-profile-section.component.scss'
})
export class UserProfileSectionComponent {
  @Input() avatarSrc: string = '';
  @Input() firstNamePlaceholder: string = '';
  @Input() lastNamePlaceholder: string = '';
  @Input() phoneNumberPlaceholder: string = '';
  @Input() emailPlaceholder: string = '';
  @Input() odysseyProfilePlaceholder: string = '';
  @Input() rolePlaceholder: string = '';
}
