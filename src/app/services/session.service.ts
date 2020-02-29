import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

    constructor() {}

        setUser(username: string) {
            localStorage.setItem('user', username);
        }

        getUser(): string {
            return localStorage.getItem('user');
        }

        setOpponent(opponent: string) {
            localStorage.setItem('opponent', opponent);
        }

        getOpponent(): string {
            return localStorage.getItem('opponent');
        }
}
