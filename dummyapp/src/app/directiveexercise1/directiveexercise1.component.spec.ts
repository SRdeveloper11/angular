import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Directiveexercise1Component } from './directiveexercise1.component';

describe('Directiveexercise1Component', () => {
  let component: Directiveexercise1Component;
  let fixture: ComponentFixture<Directiveexercise1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Directiveexercise1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Directiveexercise1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
