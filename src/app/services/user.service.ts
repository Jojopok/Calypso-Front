import { Injectable, signal, Signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/users'; // URL de l'API du back-end
  private userSignal = signal<User | null>(null);

  constructor(private http: HttpClient) {}

  getUser(): Signal<User> {
    // On utilise un cast car on a déjà vérifié que la valeur n'est pas null
    return signal(this.userSignal() as User);
  }

  setUser(user: User): void {
      this.userSignal.set(user);
  }

  // Méthode pour récupérer le profil de l'utilisateur avec le token dans l'en-tête
  GetCurrentProfil(token: string): Observable<User> {
    // Créer les en-têtes HTTP avec le token d'authentification
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    // Effectuer la requête GET avec les en-têtes
    return this.http.get<User>(`${this.apiUrl}/profil`, { headers });
  }
}
