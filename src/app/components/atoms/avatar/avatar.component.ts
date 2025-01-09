import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {
  @Input() src?: string = '';
  @Input() alt: string = 'User avatar';
  @Input() sizeAvatarContainer: string = '50px'; 
  @Input() sizeAvatar: string = '35px'; 
}
