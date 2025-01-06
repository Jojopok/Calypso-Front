import { Component, Input } from '@angular/core';
import { NavItemComponent } from '../nav-item/nav-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-list',
  standalone: true,
  imports: [NavItemComponent, CommonModule],
  templateUrl: './nav-list.component.html',
  styleUrl: './nav-list.component.scss'
})
export class NavListComponent {
  @Input() items: { iconSrc: string; text?: string; route: string }[] = [];
  @Input() isCollapsed = false; 
}
