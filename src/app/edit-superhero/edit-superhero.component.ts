import { Component, OnInit, Input } from '@angular/core'

import { Superhero } from '../superhero'

@Component({
  selector: 'app-edit-superhero',
  templateUrl: './edit-superhero.component.html',
  styleUrls: ['./edit-superhero.component.scss']
})
export class EditSuperheroComponent implements OnInit {

  @Input() superhero: Superhero
  @Input() affiliation: string

  constructor() { }

  ngOnInit() {
  }

}
