import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Algo } from "../models/algo";

@Injectable({
  providedIn: 'root'
})
export class AlgoService {
  private apiUrl = 'http://localhost:8080/algos';

  constructor(private http: HttpClient) {}

  getAlgos(): Observable<Algo[]> {
    return this.http.get<Algo[]>(this.apiUrl);
  }

  getAlgoById(id: number): Observable<Algo> {
    return this.http.get<Algo>(`${this.apiUrl}/${id}`);
  }

  addAlgo(algo: Algo): Observable<Algo> {
    return this.http.post<Algo>(this.apiUrl, algo);
  }

  updateAlgo(algo: Algo): Observable<Algo> {
    console.log(algo);
    return this.http.put<Algo>(`${this.apiUrl}/${algo.id}`, algo);
  }

}

