import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Min8Component } from './min8.component';

describe('Min8Component', () => {
  let component: Min8Component;
  let fixture: ComponentFixture<Min8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Min8Component]
    });
    fixture = TestBed.createComponent(Min8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
