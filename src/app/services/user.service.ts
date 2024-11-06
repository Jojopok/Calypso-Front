import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/users'; // URL de l'API du back-end

  constructor(private http: HttpClient) {}

  getUserById(id: number): Observable<User> {
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJibGFibGE1QGdtYWlsLmNvbSIsInVzZXJJZCI6Miwicm9sZXMiOlt7ImF1dGhvcml0eSI6IlVzZXIifV0sImlhdCI6MTczMDgyMDQ4NCwiZXhwIjoxNzMwODI0MDg0fQ.x4cn-373WwWE7ZqGlkC0IlcQjB6AuNs-D5YSFe4hv6Q"; // Récupérer le token depuis le stockage local
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<User>(`${this.apiUrl}/${id}`, { headers });
  }
}
