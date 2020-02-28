import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';

interface User {
  name: string;
  id: number;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit {

  public userEnter: boolean = true;
  public username: string = '';

  public users: Array<User> = [];
  public message: string = '';
  public messages: string[] = [];
  constructor(
      private chatService: ChatService,
      private router: Router,
      private sessionService: SessionService
  ) {}

  ngOnInit() {
    this.chatService.receiveChat().subscribe((message: string) => {
      this.messages.push(message);
    });

    this.chatService.getUsers().subscribe((users: Array<User>) => {
      this.users = users;
    });

    this.chatService.rejectChat().subscribe(username => {
      if (username === this.username) {
        console.log('msg rejected, user logged out already');
        this.userEnter = true;
        this.username = '';
      }
    });

    this.chatService.startGames().subscribe(users => {
      console.log('users: ', users);
      // tslint:disable-next-line: no-string-literal
      if (users['username'] === this.username) {
        // tslint:disable-next-line: no-string-literal
        this.chatService.opponent = users['opponent'];
        this.gotoTicTacToe();
      }
    });
  }

  addUser() {
    this.chatService.addUser(this.username);
    this.sessionService.setUser(this.username);
    this.userEnter = false;
  }

  addChat() {
    this.messages.push(this.message);
    this.chatService.sendChat(this.username, this.message);
    this.message = '';
  }

  gotoGame(user: string) {
    this.gotoTicTacToe();
    this.chatService.gotoGame(this.username, user);
  }

  private gotoTicTacToe(): void {
    this.router.navigateByUrl('/tictactoe');
  }
}
