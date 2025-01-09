import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode'; 
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'authToken';
  private apiUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) {}

  /**
   * Méthode pour authentifier l'utilisateur et stocker le token JWT
   * Le token est extrait correctement de la réponse et stocké localement.
   */
  login(credentials: { username: string; password: string }): Observable<{token: string}> {
    return this.http.post<{token: string}>(`${this.apiUrl}/login`, credentials)
      .pipe(
        tap(response => {
          if (response && response.token) {
            this.setToken(response.token);
          }
        })
      );
  }

  // Stocker le token dans le stockage local
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getCurrentUserId(): number | null {
    const token = localStorage.getItem(this.tokenKey);
    if (!token) {
        console.warn('Aucun token trouvé dans le localStorage.');
        return null;
    }
    try {
        const decodedToken: any = jwtDecode(token); // Décoder le token JWT
        if (decodedToken?.sub) {
            const userId = Number(decodedToken.sub);
            if (!isNaN(userId)) {
                return userId; // Conversion sécurisée en nombre
            }
        }
        console.error('Le token ne contient pas d\'ID utilisateur valide.');
        return null;
    } catch (error) {
        console.error('Erreur lors du décodage du token JWT :', error);
        return null;
    }
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
    console.log(user);
    return this.http.post(`${this.apiUrl}/register`, user);
  }
}
