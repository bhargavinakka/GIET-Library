import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cse3Component } from './cse3.component';

describe('Cse3Component', () => {
  let component: Cse3Component;
  let fixture: ComponentFixture<Cse3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cse3Component]
    });
    fixture = TestBed.createComponent(Cse3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
