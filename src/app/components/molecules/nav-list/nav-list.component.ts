import { Component, Input } from '@angular/core';
import { NavItemComponent } from '../nav-item/nav-item.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-list',
  standalone: true,
  imports: [NavItemComponent, CommonModule],
  templateUrl: './nav-list.component.html',
  styleUrl: './nav-list.component.scss'
})
export class NavListComponent {
  @Input() items: { iconSrc: string; text?: string; route?: string }[] = [];
  @Input() isCollapsed = false; 
  
  constructor(private authService: AuthService,
              private router: Router
  ) {}
  
  isActive(route: any): boolean {
    return this.router.isActive(route, true);
  }

  /**
   * Méthode pour gérer la déconnexion
   */
  logout(): void {
    console.log('Déconnexion en cours...');
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
