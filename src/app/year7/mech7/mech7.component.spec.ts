import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mech7Component } from './mech7.component';

describe('Mech7Component', () => {
  let component: Mech7Component;
  let fixture: ComponentFixture<Mech7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Mech7Component]
    });
    fixture = TestBed.createComponent(Mech7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
