import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from "./components/pages/user-profile/user-profile.component";
import { HttpClientModule } from '@angular/common/http';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'calypso-front';
}
