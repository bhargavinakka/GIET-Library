import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Civi6Component } from './civi6.component';

describe('Civi6Component', () => {
  let component: Civi6Component;
  let fixture: ComponentFixture<Civi6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Civi6Component]
    });
    fixture = TestBed.createComponent(Civi6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
