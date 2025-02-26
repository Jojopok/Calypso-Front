import { CommonModule } from '@angular/common';
import {Component, Input, ViewEncapsulation, forwardRef, Output, EventEmitter} from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldComponent),
      multi: true
    }
  ],
  imports:[CommonModule, FormsModule],
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() fieldId: string = '';
  @Input() value: string = '';
  @Input() isRequired: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() backgroundColor: 'light' | 'dark' = 'dark';

  // Méthodes pour la gestion des changements et des touches
  onChange = (value: string) => {};
  onTouched = () => {};

  // Implémentation de ControlValueAccessor
  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // Méthode appelée lorsque l'utilisateur change la valeur
  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value); // Informe Angular du changement de valeur
  }

  // Méthode appelée lorsque le champ est touché
  @Output() valueChange = new EventEmitter<unknown>();
  onBlur(): void {
    this.onTouched();
  }
}
