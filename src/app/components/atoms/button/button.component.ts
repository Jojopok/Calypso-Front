import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() buttonType: 'primary' | 'secondary' | 'submit' = 'primary';
  @Input() type:'button' | 'submit' = 'button';
  @Input() disabled: boolean = false;
}
