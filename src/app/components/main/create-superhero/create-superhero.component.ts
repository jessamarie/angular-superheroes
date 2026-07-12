import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Superhero } from '../../../superhero';

/** Collapsible form for adding a new superhero to the phone book. */
@Component({
  selector: 'app-create-superhero',
  imports: [FormsModule],
  templateUrl: './create-superhero.component.html',
  styleUrl: './create-superhero.component.scss'
})
export class CreateSuperheroComponent {
  readonly created = output<Omit<Superhero, 'id'>>();

  readonly open = signal(false);
  name = '';
  phoneNumber = '';
  affiliation = 'Marvel';

  toggle(): void {
    this.open.update(open => !open);
  }

  createHero(): void {
    this.created.emit({
      name: this.name.trim(),
      phoneNumber: this.phoneNumber.trim(),
      affiliation: this.affiliation,
      strengths: [],
      weaknesses: [],
      photoUrl: ''
    });
    this.reset();
  }

  cancel(): void {
    this.reset();
  }

  private reset(): void {
    this.name = '';
    this.phoneNumber = '';
    this.affiliation = 'Marvel';
    this.open.set(false);
  }
}
