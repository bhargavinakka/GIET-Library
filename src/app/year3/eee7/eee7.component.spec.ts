import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eee7Component } from './eee7.component';

describe('Eee7Component', () => {
  let component: Eee7Component;
  let fixture: ComponentFixture<Eee7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Eee7Component]
    });
    fixture = TestBed.createComponent(Eee7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
