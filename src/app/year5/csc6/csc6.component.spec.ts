import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Csc6Component } from './csc6.component';

describe('Csc6Component', () => {
  let component: Csc6Component;
  let fixture: ComponentFixture<Csc6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Csc6Component]
    });
    fixture = TestBed.createComponent(Csc6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
