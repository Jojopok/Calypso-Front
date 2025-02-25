import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../atoms/icon/icon.component';
import { TextComponent } from '../../atoms/text/text.component';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [RouterLink, CommonModule, IconComponent, TextComponent],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.scss'
})
export class NavItemComponent {
  @Input() isCollapsed: boolean = false; 
  @Input() iconSrc!: string; 
  @Input() text: string | undefined;   
  @Input() route: string | undefined;   
}
