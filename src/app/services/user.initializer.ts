import { APP_INITIALIZER } from '@angular/core';
import { catchError, noop, Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { User } from '../models/user';

function initializeUser(
    authService: AuthService,
): () => (() => void) | Observable<void | User> {
    return () => {
        // Utilisation de localStorage pour récupérer le token
        const authToken = localStorage.getItem('authToken');
        if (authToken) {
            return authService.getCurrentProfil().pipe(
                catchError(() => {
                    return of(noop());
                }),
            );
        }
        return noop;
    };
}

export const UserInitializerProvider = {
    provide: APP_INITIALIZER,
    useFactory: initializeUser,
    multi: true,
    deps: [AuthService], 
};
