import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroContainerComponent } from './superhero-container.component';

describe('SuperheroContainerComponent', () => {
  let component: SuperheroContainerComponent;
  let fixture: ComponentFixture<SuperheroContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperheroContainerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SuperheroContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
