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

  it('should set superhero', () => {
    component.selectSuperhero(superhero);
    expect(component.selectedHero).toEqual(superhero);
  });

  it('should unset superhero', () => {
    component.selectSuperhero(superhero);
    component.unselectSuperhero();
    expect(component.selectedHero).toEqual(null);
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
