import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Min2Component } from './min2.component';

describe('Min2Component', () => {
  let component: Min2Component;
  let fixture: ComponentFixture<Min2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Min2Component]
    });
    fixture = TestBed.createComponent(Min2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
