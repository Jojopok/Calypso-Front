import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode'; 
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'authToken';
  private apiUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) {}

  // Méthode pour authentifier l'utilisateur et stocker le token JWT
  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(this.apiUrl, credentials);
  }

  // Stocker le token dans le stockage local
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // Récupérer l'ID utilisateur à partir du token JWT
  getCurrentUserId(): number | null {
    const token = localStorage.getItem(this.tokenKey);
    if (token) {
      try {
        const decodedToken: any = jwtDecode(token); // Appel de la fonction `jwtDecode`
        console.log(decodedToken)
        return decodedToken?.userId || null; 
      } catch (error) {
        console.error('Erreur lors du décodage du token JWT', error);
        return null;
      }
    }
    return null;
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
