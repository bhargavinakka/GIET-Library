import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mech6Component } from './mech6.component';

describe('Mech6Component', () => {
  let component: Mech6Component;
  let fixture: ComponentFixture<Mech6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Mech6Component]
    });
    fixture = TestBed.createComponent(Mech6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
