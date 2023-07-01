import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Min1Component } from './min1.component';

describe('Min1Component', () => {
  let component: Min1Component;
  let fixture: ComponentFixture<Min1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Min1Component]
    });
    fixture = TestBed.createComponent(Min1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
