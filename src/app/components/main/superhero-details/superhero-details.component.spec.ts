import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { SuperheroDetailsComponent } from './superhero-details.component';
import { Superhero } from '../../../superhero';

describe('SuperheroDetailsComponent', () => {
  let component: SuperheroDetailsComponent;
  let fixture: ComponentFixture<SuperheroDetailsComponent>;

  const superhero: Superhero = {
    id: 3,
    name: 'Iron Man',
    phoneNumber: '555-555-6523',
    strengths: ['flying', 'laser canons'],
    weaknesses: ['emotions'],
    photoUrl: 'http://i.imgur.com/SUkgtZpm.jpg',
    affiliation: 'Marvel'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperheroDetailsComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuperheroDetailsComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('superhero', superhero);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start in view mode and switch to edit mode', () => {
    expect(component.editing()).toBe(false);
    component.startEdit();
    expect(component.editing()).toBe(true);
    component.cancelEdit();
    expect(component.editing()).toBe(false);
  });
});
