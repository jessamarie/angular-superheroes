import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { EditSuperheroComponent } from './edit-superhero.component';

describe('EditSuperheroComponent', () => {
  let component: EditSuperheroComponent;
  let fixture: ComponentFixture<EditSuperheroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ EditSuperheroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSuperheroComponent);
    component = fixture.componentInstance;
    component.superhero = {
      id: 1,
      name: 'name',
      phoneNumber: '5183333333',
      strengths: [],
      weaknesses: [],
      photoUrl: '',
      affiliation: 'marvel'
  };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
