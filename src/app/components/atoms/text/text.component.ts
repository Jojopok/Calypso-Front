import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss'
})
export class TextComponent {
  @Input() text: string | number = '';
  @Input() color: string = 'white';
  @Input() fontSize: string = '1rem';
}
