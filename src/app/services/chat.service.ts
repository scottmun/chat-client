import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
    constructor(private socket: Socket) {}

    addUser(name: string) {
        this.socket.emit('adduser', name);
    }

    sendChat(username: string, message: string) {
        this.socket.emit('chat', [username, message]);
    }

    rejectChat() {
        return this.socket.fromEvent('rejectchat');
    }

    receiveChat() {
        return this.socket.fromEvent('chat');
    }

    getUsers() {
        return this.socket.fromEvent('users');
    }

    startGames() {
        return this.socket.fromEvent('start-tictactoe');
    }

    gotoGame(username: string, opponent: string) {
        return this.socket.emit('start-tictactoe', {username, opponent});
    }
}
