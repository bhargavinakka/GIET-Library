import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Year9Component } from './year9.component';

describe('Year9Component', () => {
  let component: Year9Component;
  let fixture: ComponentFixture<Year9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Year9Component]
    });
    fixture = TestBed.createComponent(Year9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
