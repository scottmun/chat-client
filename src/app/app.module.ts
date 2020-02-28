import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { GameListComponent } from './game-list/game-list.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Game Center'} },
  { path: 'games', component: GameListComponent, data: { title: 'Choose your game' } },
  { path: 'tictactoe', component: TicTacToeComponent, data: { title: 'Tic Tac Toe' } },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameListComponent,
    TicTacToeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
