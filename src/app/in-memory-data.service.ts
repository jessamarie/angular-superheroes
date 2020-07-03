import { Injectable } from '@angular/core';
import { SUPERHEROES } from './mock-superheroes';
import { Superhero } from './superhero';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const superheroes = SUPERHEROES;
    
    return { superheroes };
  }

  genId(superheroes: Superhero[]): number {
    return superheroes.length > 0 ? Math.max(...superheroes.map(hero => hero.id)) + 1 : 11;
  }
}
