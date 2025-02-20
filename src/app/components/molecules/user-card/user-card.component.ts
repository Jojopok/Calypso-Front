import { Component, Input } from '@angular/core';
import { TextComponent } from "../../atoms/text/text.component";
import { AvatarComponent } from '../../atoms/avatar/avatar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [TextComponent, AvatarComponent, CommonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() userName!: string;
  @Input() userAvatar?: string;
  @Input() userPromoName!: string;
  @Input() userPromoType!: string;
  @Input() userPromoYear!: number;
  @Input() userRole!: string;

  getRoleColor(role: string): string {
    switch (role) {
      case 'EDITEUR':
        return '10px solid #2378B6'; 
      case 'ADMIN':
        return '10px solid #EEDD4F';  
      case 'USER':
        return '10px solid #F7146B';  
      default:
        return '10px solid #F7146B'; 
    }
  }
}
