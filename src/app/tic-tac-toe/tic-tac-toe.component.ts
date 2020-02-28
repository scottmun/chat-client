import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {
  user: string;
  opponent: string;

  constructor(
    private chatService: ChatService,
    private sessionService: SessionService
  ) {
    this.user = sessionService.getUser();
    this.opponent = chatService.getOpponent(this.user);
  }

  ngOnInit() {
  }

}
