import { Component, Input } from '@angular/core';
import { InputFieldComponent } from '../../atoms/input-field/input-field.component';

@Component({
  selector: 'app-user-info-group',
  standalone: true,
  imports: [InputFieldComponent],
  templateUrl: './user-info-group.component.html',
  styleUrl: './user-info-group.component.scss'
})
export class UserInfoGroupComponent {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
}
