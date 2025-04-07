import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canActivateChild(): boolean | Observable<boolean> | Promise<boolean> {
    if (this.authService.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
