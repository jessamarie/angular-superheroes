import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSuperheroComponent } from './edit-superhero.component';

describe('EditSuperheroComponent', () => {
  let component: EditSuperheroComponent;
  let fixture: ComponentFixture<EditSuperheroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSuperheroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSuperheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
