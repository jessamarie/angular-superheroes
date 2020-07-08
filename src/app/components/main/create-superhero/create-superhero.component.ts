import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

import { faPlus, faTimesCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { Superhero } from 'src/app/superhero'

@Component({
  selector: 'app-create-superhero',
  templateUrl: './create-superhero.component.html',
  styleUrls: ['./create-superhero.component.scss']
})
export class CreateSuperheroComponent implements OnInit {
  newSuperhero: Superhero
  addHero: boolean
  faCreateMode = faPlus
  faExit = faTimesCircle
  faCreate = faPlusCircle

  @Output() changeAffiliation: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.newSuperhero = new Superhero();
    this.addHero = false;
  }

  ngOnInit() {
  }

  change() {
    this.changeAffiliation.emit(this.newSuperhero.affiliation)
  }

  createHero() {
    
  }

}
