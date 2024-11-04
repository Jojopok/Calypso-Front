import { Component } from '@angular/core';
import { UserProfileSectionComponent } from '../../organisms/user-profile-section/user-profile-section.component';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [UserProfileSectionComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {

}
