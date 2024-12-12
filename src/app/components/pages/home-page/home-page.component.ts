import { Component } from '@angular/core';
import { IconGridComponent } from '../../organisms/icon-grid/icon-grid.component';
import { SideNavbarComponent } from "../../organisms/side-navbar/side-navbar.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [IconGridComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
