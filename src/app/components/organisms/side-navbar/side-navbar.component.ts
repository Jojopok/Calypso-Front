import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToggleButtonComponent } from '../../atoms/toggle-button/toggle-button.component';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../../molecules/user/user.component';
import { NavListComponent } from "../../molecules/nav-list/nav-list.component";
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';
@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [CommonModule, ToggleButtonComponent, UserComponent, NavListComponent],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.scss'
})
export class SideNavbarComponent implements OnInit {
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    const isAdmin = this.userService.getUser()().roles.includes('ADMIN');
    if (isAdmin) {
      this.mainItems.push({ iconSrc: '/assets/icons/admin.svg', text: 'Administrateur', route: '/admin', isCollapsed: "isCollapsed" });
    }
  }

  isCollapsed = false;
  @Output() toggle = new EventEmitter<boolean>();

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
    this.toggle.emit(this.isCollapsed);
  }

  mainItems = [
    { iconSrc: '/assets/icons/home.svg', text: 'Dashboard', route: '/home', isCollapsed: "isCollapsed" },
    { iconSrc: '/assets/icons/profil.svg', text: 'Profil', route: '/profil', isCollapsed: "isCollapsed" },
    { iconSrc: '/assets/icons/algo.svg', text: 'Algorithme', route: '/algo', isCollapsed: "isCollapsed" }
  ];

  footerItems = [
    { iconSrc: '/assets/icons/notification.svg', text: 'Notification', route: '/notification', isCollapsed: "isCollapsed" },
    { iconSrc: '/assets/icons/settings.svg', text: 'Informations', route: '/settings', isCollapsed: "isCollapsed" },
    { iconSrc: '/assets/icons/logout.svg', text: 'Déconnexion',  isCollapsed: "isCollapsed" }
  ];
}
