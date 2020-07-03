import { Component, OnInit } from '@angular/core'
import { faPencilAlt, faToggleOn, faToggleOff} from '@fortawesome/free-solid-svg-icons'

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
  editMode: boolean
  faToggleOn = faToggleOn
  faToggleOff = faToggleOff
  faEdit = faPencilAlt

 /**
  * Create the superhero list
  */
  constructor(public superheroService: SuperheroService) {
    this.affiliation = ''
    this.editMode = false
  }

 /**
  * initialize superhero list
  */
  ngOnInit() {
     this.superheroService.getSuperheroes()
    .subscribe(superheros => this.superheroes = superheros);
  }

 /**
  * Get the class of the current superhero based on
  * comic book affiliation
  *
  * @param Superhero superhero the superhero to get the affiliation for
  */
  getAffiliationClass(superhero): string {
    return this.superheroService.getAffiliationClass(superhero)
  }

 /**
  * Select the superhero that the user clicks on
  *
  * @param Superhero superhero the superhero selected by the user
  */
  selectSuperhero(superhero): void {
    this.selectedHero = superhero
  }

  unselectSuperhero(): void {
    this.selectedHero = null
  }

  onAffiliationChange(event): void {
    this.affiliation = event
    console.log('event:', event)
  }

  toggleEditMode() {
    this.editMode = !this.editMode
  }

}
