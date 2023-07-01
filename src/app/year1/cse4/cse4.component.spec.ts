import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cse4Component } from './cse4.component';

describe('Cse4Component', () => {
  let component: Cse4Component;
  let fixture: ComponentFixture<Cse4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cse4Component]
    });
    fixture = TestBed.createComponent(Cse4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
