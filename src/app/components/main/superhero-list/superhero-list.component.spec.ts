import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { SuperheroListComponent } from './superhero-list.component';
import { Superhero } from '../../../superhero';

describe('SuperheroListComponent', () => {
  let component: SuperheroListComponent;
  let fixture: ComponentFixture<SuperheroListComponent>;

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
      imports: [SuperheroListComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuperheroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be initial state', () => {
    expect(component.affiliationClass).toEqual('');
  });

  it('should get affiliation state', () => {
    expect(component.getAffiliationClass(superhero)).toEqual('marvel');
  });

  const otherHero: Superhero = { ...superhero, id: 1, name: 'Batman', affiliation: 'DC Comics' };

  it('should open a hero on click', () => {
    component.toggleSuperhero(superhero);
    expect(component.selectedHero()).toEqual(superhero);
  });

  it('should close a hero on a second click', () => {
    component.toggleSuperhero(superhero);
    component.toggleSuperhero(superhero);
    expect(component.selectedHero()).toEqual(null);
  });

  it('should keep only one hero selected at a time', () => {
    component.toggleSuperhero(superhero);
    component.toggleSuperhero(otherHero);
    expect(component.selectedHero()).toEqual(otherHero);
  });

  it('should not close mid-edit, but close once editing ends', () => {
    component.toggleSuperhero(superhero);
    component.onDetailsEditingChange(true);

    // A second click while editing must NOT close the popover.
    component.toggleSuperhero(superhero);
    expect(component.selectedHero()).toEqual(superhero);

    // Once editing ends, clicking again closes it.
    component.onDetailsEditingChange(false);
    component.toggleSuperhero(superhero);
    expect(component.selectedHero()).toEqual(null);
  });

  it('should deselect when clicking outside the list', () => {
    component.toggleSuperhero(superhero);
    const outside = document.createElement('div');
    document.body.appendChild(outside);

    component.onDocumentClick({ target: outside } as unknown as MouseEvent);
    expect(component.selectedHero()).toBeNull();

    outside.remove();
  });

  it('should keep the selection when clicking inside the list', () => {
    component.toggleSuperhero(superhero);
    // The host element counts as inside.
    component.onDocumentClick({ target: fixture.nativeElement } as unknown as MouseEvent);
    expect(component.selectedHero()).toEqual(superhero);
  });

  it('should not deselect on an outside click while editing', () => {
    component.toggleSuperhero(superhero);
    component.onDetailsEditingChange(true);
    const outside = document.createElement('div');
    document.body.appendChild(outside);

    component.onDocumentClick({ target: outside } as unknown as MouseEvent);
    expect(component.selectedHero()).toEqual(superhero);

    outside.remove();
  });

  it('should change affiliation class', () => {
    component.onAffiliationChange('dccomics');
    expect(component.affiliationClass).toEqual('dccomics');
  });

  it('should filter heroes by name (case-insensitive)', () => {
    component.superheroes.set([
      { ...superhero, id: 1, name: 'Batman' },
      { ...superhero, id: 2, name: 'Superman' },
      { ...superhero, id: 3, name: 'Iron Man' }
    ]);

    component.searchTerm.set('BAT');
    expect(component.filteredSuperheroes().map(hero => hero.name)).toEqual(['Batman']);

    component.searchTerm.set('man');
    expect(component.filteredSuperheroes().map(hero => hero.name)).toEqual(['Batman', 'Superman', 'Iron Man']);

    component.searchTerm.set('');
    expect(component.filteredSuperheroes().length).toBe(3);
  });
});
