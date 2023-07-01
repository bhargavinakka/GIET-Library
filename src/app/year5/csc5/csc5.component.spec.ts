import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Csc5Component } from './csc5.component';

describe('Csc5Component', () => {
  let component: Csc5Component;
  let fixture: ComponentFixture<Csc5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Csc5Component]
    });
    fixture = TestBed.createComponent(Csc5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
