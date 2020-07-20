import { Injectable, ElementRef } from '@angular/core';
import { faTintSlash } from '@fortawesome/free-solid-svg-icons';

function _window() : Window {
   // return the global native browser window object
   return window;
}

@Injectable({
    providedIn: 'root'
  })
export class PositionService {

   isCardStartBeforeHalfPageWidth(cardElement: ElementRef) {
      let startPosition = cardElement.nativeElement.getBoundingClientRect().x;
      let windowWidth = this.nativeWindow.innerWidth;
   
      return startPosition < windowWidth/2
   }

   get nativeWindow() : Window {
      return _window();
   }
}