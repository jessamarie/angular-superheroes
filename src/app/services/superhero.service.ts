import { Injectable } from '@angular/core';

import { Superhero } from '../superhero'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class SuperheroService {
  private superheroesUrl = 'api/superheroes';

  constructor(private http: HttpClient) { }

  /**
   * Return the list of superheroes
   * @return {Superhero[]} An array of superheroes
   */
  getSuperheroes(): Observable<Superhero[]> {
    return this.http.get<Superhero[]>(this.superheroesUrl);
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
