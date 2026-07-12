import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSuperheroComponent } from './create-superhero.component';
import { Superhero } from '../../../superhero';

describe('CreateSuperheroComponent', () => {
  let component: CreateSuperheroComponent;
  let fixture: ComponentFixture<CreateSuperheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSuperheroComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateSuperheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start collapsed and toggle open', () => {
    expect(component.open()).toBe(false);
    component.toggle();
    expect(component.open()).toBe(true);
  });

  it('should emit the created hero and reset the form', () => {
    let created: Omit<Superhero, 'id'> | undefined;
    component.created.subscribe(hero => (created = hero));

    component.toggle();
    component.name = 'Deadpool';
    component.phoneNumber = '555-909-0909';
    component.affiliation = 'Marvel';
    component.createHero();

    expect(created).toEqual({
      name: 'Deadpool',
      phoneNumber: '555-909-0909',
      affiliation: 'Marvel',
      strengths: [],
      weaknesses: [],
      photoUrl: ''
    });
    // form resets and collapses after emitting
    expect(component.name).toBe('');
    expect(component.open()).toBe(false);
  });
});
