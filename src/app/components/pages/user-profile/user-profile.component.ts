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
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  standalone: true,
  providers: [HttpClientModule],
  imports: [ReactiveFormsModule, UserProfileSectionComponent]

})
export class UserProfileComponent {
  
}
