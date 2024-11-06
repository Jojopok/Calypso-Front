import { Component } from '@angular/core';
import { LogoComponent } from '../../atoms/logo/logo.component';
import { RegisterFormComponent } from '../../molecules/register-form/register-form.component';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
  standalone: true,
  imports: [LogoComponent, RegisterFormComponent],
})
export class RegisterPageComponent {}
