import { Component, computed, ElementRef, inject, OnInit, signal } from '@angular/core';
import { SuperheroService } from '../../../services/superhero.service';
import { Superhero } from '../../../superhero';
import { SuperheroDetailsComponent } from '../superhero-details/superhero-details.component';
import { CreateSuperheroComponent } from '../create-superhero/create-superhero.component';

@Component({
  selector: 'app-superhero-list',
  imports: [SuperheroDetailsComponent, CreateSuperheroComponent],
  templateUrl: './superhero-list.component.html',
  styleUrl: './superhero-list.component.scss',
  host: { '(document:click)': 'onDocumentClick($event)' }
})
export class SuperheroListComponent implements OnInit {
  private readonly superheroService = inject(SuperheroService);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  readonly superheroes = signal<Superhero[]>([]);
  readonly searchTerm = this.superheroService.searchTerm;

  /** Heroes filtered by the current search term (case-insensitive, by name). */
  readonly filteredSuperheroes = computed(() => {
    const query = this.searchTerm().trim().toLowerCase();
    const all = this.superheroes();
    return query ? all.filter(hero => hero.name.toLowerCase().includes(query)) : all;
  });

  readonly selectedHero = signal<Superhero | null>(null);
  affiliationClass = '';

  // While a hero's details are being edited, keep its popover pinned open so the
  // reflow from switching to the edit form can't trigger a mouseleave that closes it.
  private editingOpen = false;

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
   * Toggle a hero's popover on click: open it, or close it if it's already the
   * selected hero. Only one hero is ever selected at a time.
   *
   * @param superhero the superhero the user clicked
   */
  toggleSuperhero(superhero: Superhero): void {
    if (this.selectedHero() === superhero) {
      // Don't close the popover out from under an in-progress edit.
      if (this.editingOpen) {
        return;
      }
      this.selectedHero.set(null);
    } else {
      this.selectedHero.set(superhero);
    }
  }

  onDetailsEditingChange(editing: boolean): void {
    this.editingOpen = editing;
  }

  /** Deselect the open hero when the user clicks outside the phone book. */
  onDocumentClick(event: MouseEvent): void {
    if (this.editingOpen || !this.selectedHero()) {
      return;
    }
    if (!this.host.nativeElement.contains(event.target as Node)) {
      this.selectedHero.set(null);
    }
  }

  onAffiliationChange(event: string): void {
    this.affiliationClass = event;
  }
}
