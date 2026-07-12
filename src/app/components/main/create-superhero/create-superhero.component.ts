import { Component, output, signal } from '@angular/core';
import { SuperheroContainerComponent } from '../superhero-container/superhero-container.component';
import { EditSuperheroComponent, SuperheroFormValue } from '../edit-superhero/edit-superhero.component';
import { Superhero } from '../../../superhero';

/**
 * "Add Superhero" tile. Selecting it opens a popover containing the shared hero
 * form (the same one used for editing) to create a new superhero.
 */
@Component({
  selector: 'app-create-superhero',
  imports: [SuperheroContainerComponent, EditSuperheroComponent],
  templateUrl: './create-superhero.component.html',
  styleUrl: './create-superhero.component.scss',
  host: { '[class.is-open]': 'open()' }
})
export class CreateSuperheroComponent {
  readonly created = output<Omit<Superhero, 'id'>>();
  readonly open = signal(false);

  toggle(): void {
    this.open.update(open => !open);
  }

  onSaved(values: SuperheroFormValue): void {
    this.created.emit({
      ...values,
      strengths: [],
      weaknesses: [],
      photoUrl: ''
    });
    this.open.set(false);
  }

  cancel(): void {
    this.open.set(false);
  }
}
