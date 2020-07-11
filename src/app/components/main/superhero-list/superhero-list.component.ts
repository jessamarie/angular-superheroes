import { Component, OnInit } from '@angular/core';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { SuperheroService } from '../../../services/superhero.service';
import { Superhero } from '../../../superhero';

@Component({
  selector: 'app-superhero-list',
  templateUrl: './superhero-list.component.html',
  styleUrls: ['./superhero-list.component.scss']
})
export class SuperheroListComponent implements OnInit {
  superheroes: Superhero[]
  selectedHero: Superhero
  affiliationClass: string
  faEdit = faPencilAlt

  constructor(public superheroService: SuperheroService) {
    this.affiliationClass = '';
  }

 /**
  * initialize superhero list
  */
 ngOnInit() {
  this.superheroService.getSuperheroes().subscribe(superheros => this.superheroes = superheros);
}

/**
* Get the class of the current superhero based on
* comic book affiliation
*
* @param Superhero superhero the superhero to get the affiliation for
*/
getAffiliationClass(superhero: Superhero): string {
 return this.superheroService.getAffiliationClass(superhero)
}

/**
* Select the superhero that the user clicks on
*
* @param Superhero superhero the superhero selected by the user
*/
selectSuperhero(superhero: Superhero): void {
 this.selectedHero = superhero
}

unselectSuperhero(): void {
  this.selectedHero = null
}

onAffiliationChange(event: string): void {
 this.affiliationClass = event
 console.log('event:', event)
}


}
