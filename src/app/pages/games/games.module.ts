import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamesPageRoutingModule } from './games-routing.module';

import { GamesPage } from './games.page';
import { ComponentModule } from 'src/app/components/component.module';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { GameBlogComponent } from './game-blog/game-blog.component';
import { GamesReplayableComponent } from './games-replayable/games-replayable.component';
import { InstantWinGameComponent } from './instant-win-game/instant-win-game.component';
import { PrototypeGamesComponent } from './prototype-games/prototype-games.component';
import { SkillGameComponent } from './skill-game/skill-game.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamesPageRoutingModule,
    ComponentModule,
    MatDialogModule,

  ],
  declarations: [
    GamesPage,
    GameBlogComponent,
    GamesReplayableComponent,
    InstantWinGameComponent,
    PrototypeGamesComponent,
    SkillGameComponent
  ]
})
export class GamesPageModule {}
