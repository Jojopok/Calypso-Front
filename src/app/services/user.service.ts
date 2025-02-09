import { Injectable, signal, Signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { User } from '../models/user';
import { UserUpdateDTO } from '../models/userUpdateDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/users';
  private userSignal = signal<User | null>(null);

  constructor(private http: HttpClient) {}

  getUser(): Signal<User> {
    // On utilise un cast car on a déjà vérifié que la valeur n'est pas null
    return signal(this.userSignal() as User);
  }

  setUser(user: User): void {
    this.userSignal.set(user);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  // Méthode pour mettre à jour un utilisateur
  updateUser(updatedUser: UserUpdateDTO, userId: number): Observable<User> {
    return this.http.put(`${this.apiUrl}/${userId}`, updatedUser).pipe(tap((user: any) => {this.setUser(user)})); // Mettre à jour l'utilisateur avec ses nouvelles infos
  }

}
