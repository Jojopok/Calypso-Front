import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Type } from '../models/type';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  private apiUrl = 'http://localhost:8080/types';  // URL de l'API pour récupérer les catégories

  constructor(private http: HttpClient) {
  }

  // Récupérer la liste Catégories
  getTypes(): Observable<Type[]> {
    return this.http.get<Type[]>(this.apiUrl);
  }

}
