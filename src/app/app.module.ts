import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { TeamsComponent } from './components/team/team.component';
import { TournamentComponent } from './components/tournament/tournament.component';
import { KeyComponent } from './components/key/key.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddTeamComponent,
    TeamsComponent,
    KeyComponent,
    TournamentComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
