import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { GameComponent } from './game.component';
import { ShotComponent } from './shot/shot.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    AppMaterialModule 
    ],
  declarations: [ 
    AppComponent,
    GameComponent,
    ShotComponent 
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
