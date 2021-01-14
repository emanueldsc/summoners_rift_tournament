import { Component, OnInit, ViewChild } from '@angular/core';
import { Team, Key, Tournament, Round } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'Summoners-Rift';

  teams: Team[] = [];
  rounds: Round[] = [];

  tournament: Tournament;

  addTeam(team: string) {
    const newTeam = new Team(team);
    this.teams.push(newTeam);
    try {
      this.tournament = new Tournament(this.teams);
      this.rounds = this.tournament.round;
    } catch (e) {
      console.error(e);
    }
  }

  newRound() {
    this.tournament.generateNewRound();
    this.rounds = this.tournament.round;
  }

  ngOnInit(): void {
    this.addTeam('A');
    this.addTeam('B');
    this.addTeam('C');
    this.addTeam('D');
    this.addTeam('E');
    this.addTeam('F');
    this.addTeam('G');
    this.addTeam('H');
  }

}
