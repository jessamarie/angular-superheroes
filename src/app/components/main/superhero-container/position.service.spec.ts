import { PositionService } from './position.service';

describe('PositionService', () => {
  let service: PositionService;

  beforeEach(() => {
    service = new PositionService();
  });

  // Build a fake (popover, card) pair: the card reports `cardRect`, and the
  // popover measures to `popoverHeight`.
  function place(cardRect: Partial<DOMRect>, popoverHeight: number): string {
    const card = { getBoundingClientRect: () => cardRect as DOMRect } as unknown as HTMLElement;
    const popover = {
      getBoundingClientRect: () => ({ height: popoverHeight } as DOMRect)
    } as unknown as HTMLElement;
    return service.getPlacement(popover, card);
  }

  function withWindow(innerWidth: number, innerHeight: number, run: () => void): void {
    const spy = vi
      .spyOn(service, 'nativeWindow', 'get')
      .mockReturnValue({ innerWidth, innerHeight } as unknown as Window);
    try {
      run();
    } finally {
      spy.mockRestore();
    }
  }

  it('opens down toward the right for a short popover on a top-left card', () => {
    withWindow(1000, 800, () => {
      const cls = place({ x: 100, top: 100, bottom: 230 }, 300);
      expect(cls).toContain('position-right');
      expect(cls).toContain('open-down');
    });
  });

  it('flips up for a card near the bottom of the screen', () => {
    withWindow(1000, 800, () => {
      // 600 + 300 = 900 > 800 (no room below); 730 - 300 = 430 >= 0 (fits above)
      const cls = place({ x: 800, top: 600, bottom: 730 }, 300);
      expect(cls).toContain('position-left');
      expect(cls).toContain('open-up');
    });
  });

  it('centres when the popover fits neither below nor above', () => {
    withWindow(1000, 800, () => {
      // 300 + 700 = 1000 > 800 (no below); 430 - 700 = -270 < 0 (no above)
      const cls = place({ x: 300, top: 300, bottom: 430 }, 700);
      expect(cls).toBe('open-center');
    });
  });

  it('centres on a narrow viewport regardless of fit', () => {
    withWindow(500, 800, () => {
      const cls = place({ x: 100, top: 100, bottom: 230 }, 300);
      expect(cls).toBe('open-center');
    });
  });
});
