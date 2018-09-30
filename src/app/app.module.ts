import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PuzzleComponent } from './puzzle.component';

import { MatCardModule } from '@angular/material/card';
import { PuzzleListComponent } from './puzzle-list/puzzle-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PuzzleComponent,
    PuzzleListComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
