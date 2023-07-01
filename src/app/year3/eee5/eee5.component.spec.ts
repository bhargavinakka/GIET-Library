import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eee5Component } from './eee5.component';

describe('Eee5Component', () => {
  let component: Eee5Component;
  let fixture: ComponentFixture<Eee5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Eee5Component]
    });
    fixture = TestBed.createComponent(Eee5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
