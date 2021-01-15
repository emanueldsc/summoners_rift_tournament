import { Component, OnInit, ViewChild } from '@angular/core'
import { Team, Key, Tournament, Round } from './models'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Summoners-Rift'

  teams: Team[] = []
  rounds: Round[] = []

  tournament: Tournament

  addTeam(team: string) {
    const newTeam = new Team(team)
    this.teams.push(newTeam)

  }

  newRound() {

    if (this.rounds.length && this.rounds[this.rounds.length - 1].keys.length == 1) {
      const key = this.rounds[this.rounds.length - 1].keys[0]
      if (key.teamA != key.teamB) {
        const winner = key.getWiner()
        this.rounds.push(new Round([new Key(winner, winner)]))
      }
    }

    if (this.tournament) {
      this.tournament.generateNewRound()
      this.rounds = this.tournament.round
    } else {
      try {
        this.tournament = new Tournament(this.teams)
        this.rounds = this.tournament.round
      } catch (e) {
        console.error(e)
      }
    }

  }

  ngOnInit(): void {
    // this.addTeam('A')
    // this.addTeam('B')
    // this.addTeam('C')
    // this.addTeam('D')
    // this.addTeam('E')
    // this.addTeam('F')
    // this.addTeam('G')
    // this.addTeam('H')
    // this.addTeam('I')
    // this.addTeam('J')
    // this.addTeam('L')
    // this.addTeam('M')
    // this.addTeam('N')
    // this.addTeam('O')
    // this.addTeam('P')
    // this.addTeam('Q')
  }

}
