import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAnswer } from '../models/user-answer';

@Injectable({ providedIn: 'root' })
export class UserAnswerService {
  private apiUrl = 'http://localhost:8080/user-answers';

  constructor(private http: HttpClient) {}

  // Envoie d'une réponse utilisateur
  addUserAnswer(answer: UserAnswer): Observable<UserAnswer> {
    return this.http.post<UserAnswer>(this.apiUrl, answer);
  }
}
