import { Component } from '@angular/core';
import { ToggleButtonComponent } from '../../atoms/toggle-button/toggle-button.component';
import { AvatarComponent } from '../../atoms/avatar/avatar.component';
import { TextComponent } from '../../atoms/text/text.component';
import { NavItemComponent } from '../../atoms/nav-item/nav-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [CommonModule, ToggleButtonComponent, AvatarComponent, TextComponent, NavItemComponent],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.scss'
})
export class SideNavbarComponent {
  isCollapsed = false;

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
    console.log('Navbar state:', this.isCollapsed);
  }

  navItems = [
    { iconSrc: '/assets/icons/home.svg', label: 'Dashboard', route: '/dashboard' },
    { iconSrc: '/assets/icons/profile.svg', label: 'Profil', route: '/profil' },
    { iconSrc: '/assets/icons/algo.svg', label: 'Algorithme', route: '/algo' },
    { iconSrc: '/assets/icons/admin.svg', label: 'Administrateur', route: '/admin' },
  ];

  footerItems = [
    { iconSrc: '/assets/icons/notification.svg', label: 'Notification', route: '/notification' },
    { iconSrc: '/assets/icons/settings.svg', label: 'Mes informations', route: '/settings' },
    { iconSrc: '/assets/icons/logout.svg', label: 'Déconnexion', route: '/logout' },
  ];
}
