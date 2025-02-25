import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavbarComponent } from '../../organisms/side-navbar/side-navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, SideNavbarComponent, CommonModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  isCollapsed = false;

  updateCollapseState(collapseState: boolean) {
    this.isCollapsed = collapseState;
  }
}
