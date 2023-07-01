import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Csc4Component } from './csc4.component';

describe('Csc4Component', () => {
  let component: Csc4Component;
  let fixture: ComponentFixture<Csc4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Csc4Component]
    });
    fixture = TestBed.createComponent(Csc4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
