import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Csc8Component } from './csc8.component';

describe('Csc8Component', () => {
  let component: Csc8Component;
  let fixture: ComponentFixture<Csc8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Csc8Component]
    });
    fixture = TestBed.createComponent(Csc8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
