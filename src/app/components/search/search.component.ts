import { Component, inject } from '@angular/core';
import { SuperheroService } from '../../services/superhero.service';

/** Search box that filters the hero list by name via the shared searchTerm signal. */
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  private readonly superheroService = inject(SuperheroService);

  readonly searchTerm = this.superheroService.searchTerm;

  onSearch(value: string): void {
    this.superheroService.searchTerm.set(value);
  }

  clear(): void {
    this.superheroService.searchTerm.set('');
  }
}
