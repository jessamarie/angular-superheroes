import { Component, OnInit } from '@angular/core'

import { Superhero } from '../superhero'
import { SUPERHEROES } from '../mock-superheroes'


@Component({
  selector: 'app-superheroes',
  templateUrl: './superheroes.component.html',
  styleUrls: ['./superheroes.component.scss']
})

/** Class representing a list of superheroes. */
export class SuperheroesComponent implements OnInit {

  superheroes: Superhero[]
  selectedHero: Superhero

 /**
  * Create the superhero list
  */
  constructor() {
    this.superheroes = SUPERHEROES
  }

  ngOnInit() {
  }

 /**
  * Get the class of the current hero based on
  * it's affiliation
  * @param {Superhero} superhero the hero
  * @return {string} the class for the affiliation
  */
  getAffiliationClass(superhero): string {

    const affiliation = superhero.affiliation

    return affiliation.replace(/\s+/g, '').toLowerCase();
  }

 /**
  * Select the hero that the user clicks on
  *
  * @param {Superhero} superhero the hero selected by the user
  */
  selectSuperhero(superhero): void {
    this.selectedHero = superhero
  }

}
