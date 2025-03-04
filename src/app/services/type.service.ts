import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Type } from '../models/type';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  private apiUrl = 'http://localhost:8080/types';

  constructor(private http: HttpClient) {}

  getTypes(): Observable<Type[]> {
    return this.http.get<Type[]>(this.apiUrl);
  }
}
