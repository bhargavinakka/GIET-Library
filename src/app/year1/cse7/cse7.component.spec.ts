import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cse7Component } from './cse7.component';

describe('Cse7Component', () => {
  let component: Cse7Component;
  let fixture: ComponentFixture<Cse7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cse7Component]
    });
    fixture = TestBed.createComponent(Cse7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
