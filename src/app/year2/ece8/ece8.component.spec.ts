import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ece8Component } from './ece8.component';

describe('Ece8Component', () => {
  let component: Ece8Component;
  let fixture: ComponentFixture<Ece8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ece8Component]
    });
    fixture = TestBed.createComponent(Ece8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
