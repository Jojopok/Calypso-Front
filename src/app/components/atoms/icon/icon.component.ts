import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  template: '',
  styles: []
})
export class IconComponent {
  @Input() iconSrc!: string;
}
