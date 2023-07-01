import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Min7Component } from './min7.component';

describe('Min7Component', () => {
  let component: Min7Component;
  let fixture: ComponentFixture<Min7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Min7Component]
    });
    fixture = TestBed.createComponent(Min7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
