import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eee8Component } from './eee8.component';

describe('Eee8Component', () => {
  let component: Eee8Component;
  let fixture: ComponentFixture<Eee8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Eee8Component]
    });
    fixture = TestBed.createComponent(Eee8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
