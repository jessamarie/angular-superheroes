import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { SuperheroService } from '../../../services/superhero.service';
import { Superhero } from '../../../superhero';
import { SuperheroDetailsComponent } from '../superhero-details/superhero-details.component';
import { CreateSuperheroComponent } from '../create-superhero/create-superhero.component';

@Component({
  selector: 'app-superhero-list',
  imports: [SuperheroDetailsComponent, CreateSuperheroComponent],
  templateUrl: './superhero-list.component.html',
  styleUrl: './superhero-list.component.scss'
})
export class SuperheroListComponent implements OnInit {
  private readonly superheroService = inject(SuperheroService);

  readonly superheroes = signal<Superhero[]>([]);
  readonly searchTerm = this.superheroService.searchTerm;

  /** Heroes filtered by the current search term (case-insensitive, by name). */
  readonly filteredSuperheroes = computed(() => {
    const query = this.searchTerm().trim().toLowerCase();
    const all = this.superheroes();
    return query ? all.filter(hero => hero.name.toLowerCase().includes(query)) : all;
  });

  selectedHero: Superhero | null = null;
  affiliationClass = '';

  ngOnInit(): void {
    this.superheroService.getSuperheroes().subscribe(superheroes => this.superheroes.set(superheroes));
  }

  /**
   * Add a newly created superhero and show it in the list.
   *
   * @param hero the new superhero (without an id)
   */
  onCreated(hero: Omit<Superhero, 'id'>): void {
    this.superheroService.addSuperhero(hero).subscribe(created =>
      this.superheroes.update(list => [...list, created])
    );
  }

  /**
   * Get the class of the current superhero based on comic book affiliation
   *
   * @param superhero the superhero to get the affiliation for
   */
  getAffiliationClass(superhero: Superhero): string {
    return this.superheroService.getAffiliationClass(superhero);
  }

  /**
   * Select the superhero that the user hovers over
   *
   * @param superhero the superhero selected by the user
   */
  selectSuperhero(superhero: Superhero): void {
    this.selectedHero = superhero;
  }

  unselectSuperhero(): void {
    this.selectedHero = null;
  }

  onAffiliationChange(event: string): void {
    this.affiliationClass = event;
  }
}
