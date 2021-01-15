import { Component, Input, OnInit } from '@angular/core'
import { Key } from '../../models'

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.scss']
})
export class KeyComponent implements OnInit {

  @Input() key: Key

  constructor() { }

  ngOnInit(): void {
    console.log(this.key)
  }

  setWinner(keyWinner) {
    if (this.key.winer)
      return
    else if (keyWinner == 'A')
      this.key.winerA()
    else 
      this.key.winerB()
  }

}
