import { Component, ViewChild } from '@angular/core';
import { Team, Key, Tournament } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'summoners-rift';
  @ViewChild("content") content = HTMLElement;

  ngOnInit() {
    const teams = [
      new Team('Time A'),
      new Team('Time B'),
      new Team('Time C'),
      new Team('Time D'),
      new Team('Time E'),
      new Team('Time F'),
      new Team('Time G'),
      new Team('Time H'),
    ];

    const tournament = new Tournament(teams);
    debugger;
    tournament.generateNewRound();
    debugger
    tournament.generateNewRound();
    debugger
       
  }

}
