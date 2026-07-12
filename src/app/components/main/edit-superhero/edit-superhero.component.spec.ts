import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSuperheroComponent } from './edit-superhero.component';
import { Superhero } from '../../../superhero';

describe('EditSuperheroComponent', () => {
  let component: EditSuperheroComponent;
  let fixture: ComponentFixture<EditSuperheroComponent>;

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
      imports: [EditSuperheroComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(EditSuperheroComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('superhero', superhero);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should seed the form from the input hero', () => {
    expect(component.name).toEqual('Iron Man');
    expect(component.phoneNumber).toEqual('555-555-6523');
  });

  it('should emit saved with the edited values', () => {
    let saved: { name: string; phoneNumber: string } | undefined;
    component.saved.subscribe(v => (saved = v));
    component.name = 'Tony Stark';
    component.phoneNumber = '555-000-0000';
    component.updateSuperhero();
    expect(saved).toEqual({ name: 'Tony Stark', phoneNumber: '555-000-0000' });
  });
});
