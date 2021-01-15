import { Component, Output, EventEmitter, OnInit } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
import { Team } from '../../models/Team'

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {

  formTeam: FormGroup

  constructor() { }

  @Output() team = new EventEmitter<string>()

  ngOnInit(): void {
    this.createForm(new Team())
  }

  createForm(team: Team) {
    this.formTeam = new FormGroup({
      name: new FormControl(team.name)
    })
  }

  onSubmit(): void {
    const { name } = this.formTeam.value
    if (name) {
      this.team.emit(name)
      this.formTeam.reset()
    }
  }

}
