import { afterNextRender, Component, DestroyRef, ElementRef, inject, signal, viewChild } from '@angular/core';
import { PositionService } from './position.service';

@Component({
  selector: 'app-superhero-container',
  templateUrl: './superhero-container.component.html',
  styleUrl: './superhero-container.component.scss'
})
export class SuperheroContainerComponent {
  private readonly positionService = inject(PositionService);
  private readonly destroyRef = inject(DestroyRef);

  readonly card = viewChild.required<ElementRef>('card');
  readonly positionClass = signal('loading');

  constructor() {
    afterNextRender(() => {
      const el = this.card().nativeElement as HTMLElement;
      // Capture the card (offset parent) while the popover is still absolutely
      // positioned — it's lost once the popover may switch to fixed centring.
      const cardEl = (el.offsetParent as HTMLElement | null) ?? el;
      const place = () => this.positionClass.set(this.positionService.getPlacement(el, cardEl));

      place();

      // Re-place whenever the popover's size changes (e.g. the hero image loads
      // or the edit form toggles) so it can never end up cut off the screen.
      if (typeof ResizeObserver !== 'undefined') {
        const observer = new ResizeObserver(() => place());
        observer.observe(el);
        this.destroyRef.onDestroy(() => observer.disconnect());
      }
    });
  }
}
