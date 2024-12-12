import { Component, Input } from '@angular/core';
import { AvatarComponent } from '../../atoms/avatar/avatar.component';
import { TextComponent } from '../../atoms/text/text.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [AvatarComponent, TextComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input() avatarSrc!: string; 
  @Input() altText!: string;  
  @Input() userName!: string;  
  @Input() isCollapsed: boolean = false; 
}
