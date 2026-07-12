import { Injectable } from '@angular/core';

function _window(): Window {
  // return the global native browser window object
  return window;
}

const NARROW_WIDTH = 576;

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  /**
   * Choose where a popover opens relative to its card so it stays fully on
   * screen: horizontally toward the centre of the page, and vertically below the
   * card — flipping above it when it wouldn't fit below. When the popover fits
   * neither below nor above (tall popover / short viewport), or the viewport is
   * too narrow, it's shown as a centred, self-scrolling overlay instead.
   *
   * @param popover the popover element (used to measure its rendered height)
   * @param card the card the popover belongs to (used for its on-screen position)
   * @return the space-separated CSS classes to apply
   */
  getPlacement(popover: HTMLElement, card: HTMLElement): string {
    const win = this.nativeWindow;
    const cardRect = card.getBoundingClientRect();
    const popoverHeight = popover.getBoundingClientRect().height;

    const fitsBelow = cardRect.top + popoverHeight <= win.innerHeight;
    const fitsAbove = cardRect.bottom - popoverHeight >= 0;

    if (win.innerWidth <= NARROW_WIDTH || (!fitsBelow && !fitsAbove)) {
      return Vertical.Center;
    }

    const horizontal = cardRect.x < win.innerWidth / 2 ? Horizontal.Right : Horizontal.Left;
    const vertical = fitsBelow ? Vertical.Down : Vertical.Up;
    return `${horizontal} ${vertical}`;
  }

  get nativeWindow(): Window {
    return _window();
  }
}

enum Horizontal {
  Left = 'position-left',
  Right = 'position-right'
}

enum Vertical {
  Up = 'open-up',
  Down = 'open-down',
  Center = 'open-center'
}
