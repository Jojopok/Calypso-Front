import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  @Input() iconSrc!: string;
  @Input() altText: string = 'Icon';
  @Input() width: number = 24;
  @Input() height: number = 24;
  @Input() isActive: boolean = false;
}
