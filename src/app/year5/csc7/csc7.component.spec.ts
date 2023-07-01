import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Csc7Component } from './csc7.component';

describe('Csc7Component', () => {
  let component: Csc7Component;
  let fixture: ComponentFixture<Csc7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Csc7Component]
    });
    fixture = TestBed.createComponent(Csc7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
