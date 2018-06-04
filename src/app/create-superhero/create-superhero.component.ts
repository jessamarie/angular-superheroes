import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Superhero } from '../superhero'

@Component({
  selector: 'app-create-superhero',
  templateUrl: './create-superhero.component.html',
  styleUrls: ['./create-superhero.component.scss']
})
export class CreateSuperheroComponent implements OnInit {
  newSuperhero: Superhero
  @Output() changeAffiliation: EventEmitter<string> = new EventEmitter();


  constructor() {
    this.newSuperhero = new Superhero();
  }

  ngOnInit() {
  }

  change() {
    this.changeAffiliation.emit(this.newSuperhero.affiliation)
  }

}