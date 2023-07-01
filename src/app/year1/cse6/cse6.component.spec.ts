import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cse6Component } from './cse6.component';

describe('Cse6Component', () => {
  let component: Cse6Component;
  let fixture: ComponentFixture<Cse6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cse6Component]
    });
    fixture = TestBed.createComponent(Cse6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
