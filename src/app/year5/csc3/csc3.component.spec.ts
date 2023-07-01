import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Csc3Component } from './csc3.component';

describe('Csc3Component', () => {
  let component: Csc3Component;
  let fixture: ComponentFixture<Csc3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Csc3Component]
    });
    fixture = TestBed.createComponent(Csc3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
