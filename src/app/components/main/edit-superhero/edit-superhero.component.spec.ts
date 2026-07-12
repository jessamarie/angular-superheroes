import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSuperheroComponent, SuperheroFormValue } from './edit-superhero.component';
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
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should seed the form from the input hero (edit mode)', () => {
    fixture.componentRef.setInput('superhero', superhero);
    fixture.detectChanges();
    expect(component.name).toEqual('Iron Man');
    expect(component.phoneNumber).toEqual('555-555-6523');
    expect(component.affiliation).toEqual('Marvel');
  });

  it('should start blank when no hero is provided (create mode)', () => {
    fixture.detectChanges();
    expect(component.name).toBe('');
    expect(component.phoneNumber).toBe('');
    expect(component.affiliation).toBe('Marvel');
  });

  it('should emit saved with the form values', () => {
    fixture.componentRef.setInput('superhero', superhero);
    fixture.detectChanges();

    let saved: SuperheroFormValue | undefined;
    component.saved.subscribe(v => (saved = v));
    component.name = 'Tony Stark';
    component.phoneNumber = '555-000-0000';
    component.affiliation = 'DC Comics';
    component.save();

    expect(saved).toEqual({ name: 'Tony Stark', phoneNumber: '555-000-0000', affiliation: 'DC Comics' });
  });
});
