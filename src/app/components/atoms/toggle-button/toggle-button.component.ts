import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  standalone: true,
  imports: [],
  templateUrl: './toggle-button.component.html',
  styleUrl: './toggle-button.component.scss'
})
export class ToggleButtonComponent {
  @Output() toggle = new EventEmitter<void>(); // Événement pour notifier le parent
  @Input() isCollapsed: boolean = false; // État de la navbar (étendu/rétracté)

  onClick() {
    this.toggle.emit(); // Émet l'événement
  }
}
