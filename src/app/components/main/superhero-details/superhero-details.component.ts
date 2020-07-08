import { Component, OnInit, Input } from '@angular/core'
import { Superhero } from 'src/app/superhero'

@Component({
  selector: 'app-superhero-details',
  templateUrl: './superhero-details.component.html',
  styleUrls: ['./superhero-details.component.scss']
})

/** Class representing a superhero. */
export class SuperheroDetailsComponent implements OnInit {

  @Input() superhero: Superhero
  @Input() affiliation: string

  constructor() { }

  ngOnInit() {
  }

}
