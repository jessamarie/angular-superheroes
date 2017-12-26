import { Injectable } from '@angular/core';

import { Superhero } from './superhero'
import { SUPERHEROES } from './mock-superheroes'


@Injectable()
export class SuperheroService {

  superheroes: Superhero[] = SUPERHEROES

  constructor() { }

  /**
   * Return the list of superheroes
   * @return {Superhero[]} An array of superheroes
   */
  getSuperheroes(): Superhero[] {
    return this.superheroes
  }

  /**
   * Get the class of a superhero based on
   * comic book affiliation
   *
   * @param {Superhero} superhero the superhero
   * @return {string} the class for the affiliation
   */
  getAffiliationClass(superhero): string {
    return superhero.affiliation.replace(/\s+/g, '').toLowerCase();
  }

}
