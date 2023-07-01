import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mech5Component } from './mech5.component';

describe('Mech5Component', () => {
  let component: Mech5Component;
  let fixture: ComponentFixture<Mech5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Mech5Component]
    });
    fixture = TestBed.createComponent(Mech5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
