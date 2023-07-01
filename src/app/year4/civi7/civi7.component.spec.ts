import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Civi7Component } from './civi7.component';

describe('Civi7Component', () => {
  let component: Civi7Component;
  let fixture: ComponentFixture<Civi7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Civi7Component]
    });
    fixture = TestBed.createComponent(Civi7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
