import { Component, inject, input, output, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { SuperheroContainerComponent } from '../superhero-container/superhero-container.component';
import { EditSuperheroComponent } from '../edit-superhero/edit-superhero.component';
import { SuperheroService } from '../../../services/superhero.service';
import { Superhero } from '../../../superhero';

/** Popover contents for a single superhero: details view + inline edit. */
@Component({
  selector: 'app-superhero-details',
  imports: [FontAwesomeModule, SuperheroContainerComponent, EditSuperheroComponent],
  templateUrl: './superhero-details.component.html',
  styleUrl: './superhero-details.component.scss'
})
export class SuperheroDetailsComponent {
  private readonly superheroService = inject(SuperheroService);

  readonly superhero = input.required<Superhero>();
  readonly updated = output<Superhero>();

  // A signal so the view reliably refreshes when the async save completes,
  // even though the in-memory API delivers its response outside Angular's zone.
  readonly editing = signal(false);
  // Hide the photo if its (external) URL is missing/broken, instead of showing a broken image.
  readonly imageFailed = signal(false);
  readonly faEdit = faPencilAlt;

  /**
   * Imgur returns HTTP 200 with a 161x81 "image removed" placeholder for dead
   * links (so `error` never fires) — detect that by its intrinsic size and hide it.
   */
  onImageLoad(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img.naturalWidth === 161 && img.naturalHeight === 81) {
      this.imageFailed.set(true);
    }
  }

  startEdit(): void {
    this.editing.set(true);
  }

  cancelEdit(): void {
    this.editing.set(false);
  }

  onSaved(changes: Pick<Superhero, 'name' | 'phoneNumber'>): void {
    const hero = this.superhero();
    this.superheroService.updateSuperhero({ ...hero, ...changes }).subscribe(() => {
      // Reflect the change in place so the list behind the popover updates too.
      Object.assign(hero, changes);
      this.editing.set(false);
      this.updated.emit(hero);
    });
  }
}
