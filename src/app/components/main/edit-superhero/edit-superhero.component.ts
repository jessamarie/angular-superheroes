import { Component, input, OnInit, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Superhero } from '../../../superhero';

/** Inline form for editing an editable superhero's name and phone number. */
@Component({
  selector: 'app-edit-superhero',
  imports: [FormsModule],
  templateUrl: './edit-superhero.component.html',
  styleUrl: './edit-superhero.component.scss'
})
export class EditSuperheroComponent implements OnInit {
  readonly superhero = input.required<Superhero>();
  readonly saved = output<Pick<Superhero, 'name' | 'phoneNumber'>>();
  readonly cancelled = output<void>();

  name = '';
  phoneNumber = '';

  ngOnInit(): void {
    this.name = this.superhero().name;
    this.phoneNumber = this.superhero().phoneNumber;
  }

  updateSuperhero(): void {
    this.saved.emit({ name: this.name, phoneNumber: this.phoneNumber });
  }

  cancel(): void {
    this.cancelled.emit();
  }
}
