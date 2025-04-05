import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAnswer } from '../models/user-answer';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UserAnswerService {
  private apiUrl = environment.apiUrl + 'user-answers';

  constructor(private http: HttpClient) {}

  addUserAnswer(answer: UserAnswer): Observable<UserAnswer> {
    return this.http.post<UserAnswer>(this.apiUrl, answer);
  }
}
