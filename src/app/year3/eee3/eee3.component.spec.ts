import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eee3Component } from './eee3.component';

describe('Eee3Component', () => {
  let component: Eee3Component;
  let fixture: ComponentFixture<Eee3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Eee3Component]
    });
    fixture = TestBed.createComponent(Eee3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
