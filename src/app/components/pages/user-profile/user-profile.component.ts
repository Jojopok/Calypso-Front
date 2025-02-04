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
    this.currentUser = this.userService.getUser()();
  }

}
