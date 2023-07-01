import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mech8Component } from './mech8.component';

describe('Mech8Component', () => {
  let component: Mech8Component;
  let fixture: ComponentFixture<Mech8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Mech8Component]
    });
    fixture = TestBed.createComponent(Mech8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
