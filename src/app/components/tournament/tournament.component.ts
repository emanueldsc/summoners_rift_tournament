import { Component, Input, OnInit } from '@angular/core'
import { Round, Team } from 'src/app/models'

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent {

  @Input() rounds: Round[]

  constructor() { }

  

}
