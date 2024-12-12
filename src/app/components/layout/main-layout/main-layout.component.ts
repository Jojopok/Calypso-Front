import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavbarComponent } from '../../organisms/side-navbar/side-navbar.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, SideNavbarComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
