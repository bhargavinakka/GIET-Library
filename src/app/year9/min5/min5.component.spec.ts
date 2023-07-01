import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Min5Component } from './min5.component';

describe('Min5Component', () => {
  let component: Min5Component;
  let fixture: ComponentFixture<Min5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Min5Component]
    });
    fixture = TestBed.createComponent(Min5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
