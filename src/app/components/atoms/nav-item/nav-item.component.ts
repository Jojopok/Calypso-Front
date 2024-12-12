import { Component, Input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.scss'
})
export class NavItemComponent {
  @Input() iconSrc!: string; // Chemin de l'icône
  @Input() label!: string;   // Label de l'élément
  @Input() route!: string;   // Route cible
}
