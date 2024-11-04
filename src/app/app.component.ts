import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from "./components/pages/user-profile/user-profile.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'calypso-front';
}
