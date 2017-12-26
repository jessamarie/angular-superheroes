import { Component, OnInit, Input } from '@angular/core';
import { Superhero } from '../superhero'

@Component({
  selector: 'app-superhero-details',
  templateUrl: './superhero-details.component.html',
  styleUrls: ['./superhero-details.component.scss']
})

/** Class representing a superheroes. */
export class SuperheroDetailsComponent implements OnInit {

  @Input() superhero: Superhero
  @Input() affiliation: string

  constructor() { }

  ngOnInit() {
  }

}
