import { Component, Input } from '@angular/core';
import { IconComponent } from '../../atoms/icon/icon.component';
import { TextComponent } from '../../atoms/text/text.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-icon-card',
  standalone: true,
  imports: [IconComponent, TextComponent],
  templateUrl: './icon-card.component.html',
  styleUrls: ['./icon-card.component.scss'],
  
})
export class IconCardComponent {
  @Input() iconSrc!: string;
  @Input() label!: string;
  @Input() route!: string; // Route vers laquelle naviguer

  constructor(private router: Router) {}

  navigate(): void {
    if (this.route) {
      this.router.navigate([this.route]); // Navigation vers la route spécifiée
    }
  }
}
