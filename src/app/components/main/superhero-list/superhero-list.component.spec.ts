import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SuperheroListComponent } from './superhero-list.component';
import { SuperheroService } from 'src/app/services/superhero.service';

describe('SuperheroListComponent', () => {
  let component: SuperheroListComponent;
  let fixture: ComponentFixture<SuperheroListComponent>;
  // let httpMock: HttpTestingController;
  // let superheroService: SuperheroService;

  let superhero = {
    id: 1,
    name: 'name',
    phoneNumber: '5183333333',
    strengths: [],
    weaknesses: [],
    photoUrl: '',
    affiliation: 'marvel'
  }; 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ SuperheroListComponent ],
      providers: [ SuperheroService ]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperheroListComponent);
    // httpMock = TestBed.inject(HttpTestingController);
    // superheroService = TestBed.inject(SuperheroService);

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
    component.onAffiliationChange("dccomics");
    expect(component.affiliationClass).toEqual("dccomics");
  });


});
