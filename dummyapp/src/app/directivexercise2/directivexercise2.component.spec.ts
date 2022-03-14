import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Directivexercise2Component } from './directivexercise2.component';

describe('Directivexercise2Component', () => {
  let component: Directivexercise2Component;
  let fixture: ComponentFixture<Directivexercise2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Directivexercise2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Directivexercise2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
