import { inject, Injectable, signal } from '@angular/core';

import { Superhero } from '../superhero';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {
  private readonly http = inject(HttpClient);

  private superheroesUrl = 'api/superheroes';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  /** Shared name filter, written by the search box and read by the list. */
  readonly searchTerm = signal('');

  /**
   * Return the list of superheroes
   * @return An observable array of superheroes
   */
  getSuperheroes(): Observable<Superhero[]> {
    return this.http.get<Superhero[]>(this.superheroesUrl);
  }

  /**
   * Add a new superhero. The backend assigns the id.
   *
   * @param superhero the superhero to create (without an id)
   * @return an observable of the created superhero, including its new id
   */
  addSuperhero(superhero: Omit<Superhero, 'id'>): Observable<Superhero> {
    return this.http.post<Superhero>(this.superheroesUrl, superhero, this.httpOptions);
  }

  /**
   * Persist changes to a superhero.
   *
   * @param superhero the superhero to update
   * @return an observable that completes when the update is saved
   */
  updateSuperhero(superhero: Superhero): Observable<unknown> {
    return this.http.put(this.superheroesUrl, superhero, this.httpOptions);
  }

  /**
   * Get the class of a superhero based on comic book affiliation
   *
   * @param superhero the superhero
   * @return the class for the affiliation
   */
  getAffiliationClass(superhero: { affiliation: string }): string {
    return superhero.affiliation.replace(/\s+/g, '').toLowerCase();
  }
}
