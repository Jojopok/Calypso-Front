import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Promo } from '../models/promo';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/users'; // URL de l'API du back-end

  constructor(private http: HttpClient) {}

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  // Méthode pour récupérer les promos de l'utilisateur par son ID
  getUserPromos(userId: number): Observable<Promo[]> {
    return this.http.get<Promo[]>(`${this.apiUrl}/${userId}/promos`);
  }
}
