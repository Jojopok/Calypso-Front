import { Component, Input } from '@angular/core';
import { NavItemComponent } from '../../atoms/nav-item/nav-item.component';

@Component({
  selector: 'app-nav-list',
  standalone: true,
  imports: [NavItemComponent],
  templateUrl: './nav-list.component.html',
  styleUrl: './nav-list.component.scss'
})
export class NavListComponent {
  @Input() items: { iconSrc: string; label: string; route: string }[] = [];
}
