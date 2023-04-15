import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamesPageRoutingModule } from './games-routing.module';

import { GamesPage } from './games.page';
import { ComponentModule } from 'src/app/components/component.module';
import { RouterModule } from '@angular/router';
import { PipeModule } from 'src/app/pipe/pipe.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamesPageRoutingModule,
    ComponentModule,
    PipeModule,
    MatDialogModule
  ],
  declarations: [GamesPage]
})
export class GamesPageModule {}
