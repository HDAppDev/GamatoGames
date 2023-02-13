import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { SiderbarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MaterialModule
  ],
  declarations: [
    HomePage,
    HeaderComponent,
    SiderbarComponent
  ]
})
export class HomePageModule {}
