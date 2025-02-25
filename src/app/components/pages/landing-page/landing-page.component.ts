import { Component } from '@angular/core';
import { LogoComponent } from '../../atoms/logo/logo.component';
import { LoginFormComponent } from '../../molecules/login-form/login-form.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [LogoComponent, LoginFormComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
