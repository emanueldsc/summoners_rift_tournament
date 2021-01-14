import { Component, Input, OnInit } from '@angular/core';
import { Team } from 'src/app/models';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamsComponent {

  @Input() teams: Team[] = [];

}
