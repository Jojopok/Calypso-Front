import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promo } from '../models/promo';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class PromoService {
  private apiUrl = 'http://localhost:8080/promos';  // URL de l'API pour récupérer les promos

  constructor(private http: HttpClient) { }

  // Récupérer la liste des promos
  getPromos(): Observable<Promo[]> {
    return this.http.get<Promo[]>(this.apiUrl);
  }

  // Récupérer une promo par son ID
  getPromoById(id: number): Observable<Promo> {
    return this.http.get<Promo>(`${this.apiUrl}/${id}`);
  }

   // Méthode pour récupérer les membres de la promo par ID de promo
  getPromoMembers(promoId: number): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/${promoId}/members`);
  }
}
