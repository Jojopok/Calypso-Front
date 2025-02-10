import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox-toggle',
  standalone: true,
  imports: [],
  templateUrl: './checkbox-toggle.component.html',
  styleUrl: './checkbox-toggle.component.scss'
})
export class CheckboxToggleComponent {
  @Input() isChecked: boolean = false;
  @Input() label: string = '';
  @Output() toggle = new EventEmitter<boolean>();

  onToggle(event: Event) {
    const target = event.target as HTMLInputElement;
    this.toggle.emit(target.checked);
  }
}
