import { afterNextRender, Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { PositionService } from './position.service';

@Component({
  selector: 'app-superhero-container',
  templateUrl: './superhero-container.component.html',
  styleUrl: './superhero-container.component.scss'
})
export class SuperheroContainerComponent {
  private readonly positionService = inject(PositionService);

  readonly card = viewChild.required<ElementRef>('card');
  readonly positionClass = signal('loading');

  constructor() {
    // Measure where the card sits on screen after it renders, then open the
    // popover toward the centre of the page (left or right accordingly).
    afterNextRender(() => {
      this.positionClass.set(this.positionService.getPosition(this.card()));
    });
  }
}
