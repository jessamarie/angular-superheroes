import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { SearchComponent } from './search.component';
import { SuperheroService } from '../../services/superhero.service';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let service: SuperheroService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(SuperheroService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should write the query to the shared search term', () => {
    component.onSearch('bat');
    expect(service.searchTerm()).toBe('bat');
  });

  it('should clear the search term', () => {
    component.onSearch('bat');
    component.clear();
    expect(service.searchTerm()).toBe('');
  });
});
