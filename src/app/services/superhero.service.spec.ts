import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { SuperheroService } from './superhero.service';

describe('SuperheroService', () => {
  let service: SuperheroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(SuperheroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct affiliation', () => {
    expect(service.getAffiliationClass({ affiliation: 'Marvel' })).toEqual('marvel');
    expect(service.getAffiliationClass({ affiliation: 'marVel' })).toEqual('marvel');
    expect(service.getAffiliationClass({ affiliation: 'DCcomics' })).toEqual('dccomics');
    expect(service.getAffiliationClass({ affiliation: 'dc comics' })).toEqual('dccomics');
  });
});
