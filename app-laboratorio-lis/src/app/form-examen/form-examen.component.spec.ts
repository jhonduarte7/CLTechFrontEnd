import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExamenComponent } from './form-examen.component';

describe('FormExamenComponent', () => {
  let component: FormExamenComponent;
  let fixture: ComponentFixture<FormExamenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormExamenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
