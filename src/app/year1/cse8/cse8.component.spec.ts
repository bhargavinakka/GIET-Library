import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cse8Component } from './cse8.component';

describe('Cse8Component', () => {
  let component: Cse8Component;
  let fixture: ComponentFixture<Cse8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cse8Component]
    });
    fixture = TestBed.createComponent(Cse8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
