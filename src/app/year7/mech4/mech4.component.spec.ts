import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mech4Component } from './mech4.component';

describe('Mech4Component', () => {
  let component: Mech4Component;
  let fixture: ComponentFixture<Mech4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Mech4Component]
    });
    fixture = TestBed.createComponent(Mech4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
