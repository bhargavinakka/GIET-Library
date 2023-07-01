import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Civi8Component } from './civi8.component';

describe('Civi8Component', () => {
  let component: Civi8Component;
  let fixture: ComponentFixture<Civi8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Civi8Component]
    });
    fixture = TestBed.createComponent(Civi8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
