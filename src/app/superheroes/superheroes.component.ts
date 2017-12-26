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
  * @param {Superhero} hero the hero
  * @return {string} the class for the affiliation
  */
  getAffiliationClass(hero): string {

    const affiliation = hero.affiliation

    return affiliation.replace(/\s+/g, '').toLowerCase();
  }

}
