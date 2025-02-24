import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Type } from '../models/type';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  private apiUrl = 'http://localhost:8080/types';  // URL de l'API

  constructor(private http: HttpClient) {}

  // 🔥 Récupérer la liste des types avec authentification
  getTypes(): Observable<Type[]> {
    const token = localStorage.getItem('token'); // 🔥 Récupérer le token stocké (ex: après login)

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,  // 🔥 Ajouter le token dans les headers
      'Content-Type': 'application/json'
    });

    return this.http.get<Type[]>(this.apiUrl, { headers });
  }
}
