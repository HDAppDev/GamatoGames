import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesPage } from './games.page';
import { SkillGameComponent } from './skill-game/skill-game.component';
import { InstantWinGameComponent } from './instant-win-game/instant-win-game.component';
import { GameBlogComponent } from './game-blog/game-blog.component';
import { GamesReplayableComponent } from './games-replayable/games-replayable.component';
import { AdventureGameComponent } from './adventure-game/adventure-game.component';
import { PrototypeGamesComponent } from './prototype-games/prototype-games.component';
import { GamePlayComponent } from 'src/app/components/game-play/game-play.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: GamesPage,
      },
      {
        path: "skill-game/:id",
        component: SkillGameComponent,
      },
      {
        path: "instant-win-game/:id",
        component: InstantWinGameComponent,
      },
      {
        path: "game-blog/:index",
        component: GameBlogComponent,
      },
      {
        path: "replayable/:id",
        component: GamesReplayableComponent,
      },
      {
        path: "adventure-game/:id",
        component:AdventureGameComponent,
      },
      {
        path: "gamePlay",
        component: GamePlayComponent,
      },
      {
        path: "prototype-games",
        component: PrototypeGamesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesPageRoutingModule {}
