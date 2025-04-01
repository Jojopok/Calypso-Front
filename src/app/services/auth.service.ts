import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { User } from '../models/user';
import { UserService } from './user.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'authToken';
   private apiUrl = environment.apiUrl + '/auth';
  private readonly userService = inject(UserService);

  constructor(private http: HttpClient) {}

  /**
   * Méthode pour authentifier l'utilisateur et stocker le token JWT
   * Le token est extrait correctement de la réponse et stocké localement.
   */
  login(credentials: { username: string; password: string }): Observable<{token: string, user: User}> {
    return this.http.post<{token: string, user: User}>(`${this.apiUrl}/login`, credentials)
      .pipe(
        tap(response => {
          if (response && response.token) {
            this.setToken(response.token);
            this.userService.setUser({
              ...response.user
            });
          }
        })
      );
  }
  
  // Stocker le token dans le stockage local
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

   // Méthode pour récupérer le profil de l'utilisateur avec le token dans l'en-tête
  getCurrentProfil(): Observable<User> {
    // Effectuer la requête GET avec les en-têtes
    return this.http.get<User>(`${this.apiUrl}/profil`).pipe(
      tap((response: User) => {
          this.userService.setUser({
            ...this.userService.getUser()(),
            ...response
          });
      }),
    );
  }
  
  // Vérifier si l'utilisateur est authentifié
  isAuthenticated(): boolean {
    const token = localStorage.getItem(this.tokenKey);
    return !!token;
  }

  // Supprimer le token pour déconnecter l'utilisateur
  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  register(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }
}
