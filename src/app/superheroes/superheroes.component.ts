import { Component, OnInit } from '@angular/core'

import { Superhero } from '../superhero'
import { SUPERHEROES } from '../mock-superheroes'

import { SuperheroService } from '../superhero.service'


@Component({
  selector: 'app-superheroes',
  templateUrl: './superheroes.component.html',
  styleUrls: ['./superheroes.component.scss']
})

/** Class representing a list of superheroes. */
export class SuperheroesComponent implements OnInit {

  superheroes: Superhero[]
  selectedHero: Superhero
  affiliation: string

 /**
  * Create the superhero list
  */
  constructor(public superheroService: SuperheroService) {
    this.affiliation = ''
  }

 /**
  * initialize superhero list
  */
  ngOnInit() {
    this.superheroes = this.superheroService.getSuperheroes()
  }

 /**
  * Get the class of the current superhero based on
  * comic book affiliation
  */
  getAffiliationClass(superhero): string {
    return this.superheroService.getAffiliationClass(superhero)
  }

 /**
  * Select the superhero that the user clicks on
  *
  * @param {Superhero} superhero the superhero selected by the user
  */
  selectSuperhero(superhero): void {
    this.selectedHero = superhero
  }

  onAffiliationChange(event): void {
    this.affiliation = event
    console.log('event:', event)
  }

}
