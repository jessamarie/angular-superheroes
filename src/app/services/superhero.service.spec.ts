import { TestBed, inject } from '@angular/core/testing';

import { SuperheroService } from './superhero.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('SuperheroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [SuperheroService, HttpClient ]
    });
  });

  it('should be created', inject([SuperheroService], (service: SuperheroService) => {
    expect(service).toBeTruthy();
  }));
});
