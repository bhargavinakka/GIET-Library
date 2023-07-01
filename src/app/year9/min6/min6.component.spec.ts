import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Min6Component } from './min6.component';

describe('Min6Component', () => {
  let component: Min6Component;
  let fixture: ComponentFixture<Min6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Min6Component]
    });
    fixture = TestBed.createComponent(Min6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
