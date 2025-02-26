import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Algo } from "../models/algo"; // 🔥 Import du modèle Algo

@Injectable({
  providedIn: 'root'
})
export class AlgoService {
  private apiUrl = 'http://localhost:8080/algos';  // 🔥 URL de l'API pour récupérer les algos

  constructor(private http: HttpClient) {}

  // 🔥 Récupérer la liste des algos avec authentification
  getAlgos(): Observable<Algo[]> {
    const token = localStorage.getItem('token'); // 🔥 Récupérer le token stocké après login

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,  // 🔥 Ajouter le token dans les headers
      'Content-Type': 'application/json'
    });

    return this.http.get<Algo[]>(this.apiUrl, { headers });
  }
}

