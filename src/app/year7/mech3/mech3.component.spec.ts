import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mech3Component } from './mech3.component';

describe('Mech3Component', () => {
  let component: Mech3Component;
  let fixture: ComponentFixture<Mech3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Mech3Component]
    });
    fixture = TestBed.createComponent(Mech3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
