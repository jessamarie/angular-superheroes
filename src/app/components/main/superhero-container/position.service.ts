import { Injectable, ElementRef } from '@angular/core';

function _window(): Window {
  // return the global native browser window object
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  getPosition(cardElement: ElementRef): Position {
    const startPosition = cardElement.nativeElement.getBoundingClientRect().x;
    const windowWidth = this.nativeWindow.innerWidth;

    return startPosition < windowWidth / 2 ? Position.Right : Position.Left;
  }

  get nativeWindow(): Window {
    return _window();
  }
}

enum Position {
  Left = 'position-left',
  Right = 'position-right'
}
