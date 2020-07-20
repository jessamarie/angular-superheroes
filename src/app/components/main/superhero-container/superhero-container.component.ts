import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PositionService } from './position.service';
import { Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-superhero-container',
  templateUrl: './superhero-container.component.html',
  styleUrls: ['./superhero-container.component.scss']
})
export class SuperheroContainerComponent implements OnInit {
  @ViewChild('card') card: ElementRef;
  positionClass: string;
  positionSubject: Subject<string> = new BehaviorSubject('loading');

  constructor(private positionService: PositionService) { }

  ngOnInit(): void {
    // this.positionClass = 'position-right';
    // this.positionClass = this.getPositionClass();
    this.positionSubject.subscribe(async data => {
      this.positionClass = await data;
    });
  }

  ngAfterViewInit(): void {
    this.positionSubject.next(this.getPositionClass());
  }


  getPositionClass() {
    let isRight = this.positionService.isCardStartBeforeHalfPageWidth(this.card);

    console.log(this.positionService.nativeWindow);
    console.log(this.card);
    console.log(this.card.nativeElement.getBoundingClientRect());

    if (isRight) {
      console.log("right");
      return 'position-right';
    } else {
      console.log("left");
      return 'position-left';
    }
  }


}
