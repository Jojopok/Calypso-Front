import { Component, Input } from '@angular/core';
import { AvatarComponent } from '../../atoms/avatar/avatar.component';
import { TextComponent } from '../../atoms/text/text.component';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [AvatarComponent, TextComponent, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input() avatarSrc!: string; 
  @Input() altText!: string;   
  @Input() isCollapsed: boolean = false; 

  userName: string = ''; // Initialisez avec une valeur vide

  constructor(private userService: UserService) {}

  // ngOnInit(): void {
  //   this.userService.getCurrentUser().subscribe(
  //     (user: User) => 
  //       {
  //         this.userName = user.firstName + user.lastName;  
  //       });
  // }
  
}
