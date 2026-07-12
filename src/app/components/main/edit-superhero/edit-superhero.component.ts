import { Component, input, OnInit, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Superhero } from '../../../superhero';

export type SuperheroFormValue = Pick<Superhero, 'name' | 'phoneNumber' | 'affiliation'>;

/**
 * Shared hero form used both for editing an existing superhero (seeded from the
 * `superhero` input) and for creating a new one (no input).
 */
@Component({
  selector: 'app-edit-superhero',
  imports: [FormsModule],
  templateUrl: './edit-superhero.component.html',
  styleUrl: './edit-superhero.component.scss'
})
export class EditSuperheroComponent implements OnInit {
  readonly superhero = input<Superhero | null>(null);
  readonly saved = output<SuperheroFormValue>();
  readonly cancelled = output<void>();

  name = '';
  phoneNumber = '';
  affiliation = 'Marvel';

  ngOnInit(): void {
    const hero = this.superhero();
    if (hero) {
      this.name = hero.name;
      this.phoneNumber = hero.phoneNumber;
      this.affiliation = hero.affiliation;
    }
  }

  save(): void {
    this.saved.emit({
      name: this.name.trim(),
      phoneNumber: this.phoneNumber.trim(),
      affiliation: this.affiliation
    });
  }

  cancel(): void {
    this.cancelled.emit();
  }
}
