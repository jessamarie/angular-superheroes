import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Superhero } from 'src/app/superhero'

@Component({
  selector: 'app-edit-superhero',
  templateUrl: './edit-superhero.component.html',
  styleUrls: ['./edit-superhero.component.scss']
})

/** Class representing an editable superhero. */
export class EditSuperheroComponent implements OnInit {

  @Input() superhero: Superhero
  @Input() affiliation: string

  @Output() changeAffiliation: EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  change() {
    this.changeAffiliation.emit(this.affiliation)
  }

}
