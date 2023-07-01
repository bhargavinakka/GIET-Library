import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ece7Component } from './ece7.component';

describe('Ece7Component', () => {
  let component: Ece7Component;
  let fixture: ComponentFixture<Ece7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ece7Component]
    });
    fixture = TestBed.createComponent(Ece7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
