import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroDetailsComponent } from './superhero-details.component';

describe('SuperheroDetailsComponent', () => {
  let component: SuperheroDetailsComponent;
  let fixture: ComponentFixture<SuperheroDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SuperheroDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperheroDetailsComponent);
    component = fixture.componentInstance;
    component.superhero = {
      id: 1,
      name: 'name',
      phoneNumber: '5183333333',
      strengths: [],
      weaknesses: [],
      photoUrl: '',
      affiliation: 'marvel'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
