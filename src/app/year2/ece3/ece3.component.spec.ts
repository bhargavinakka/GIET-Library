import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ece3Component } from './ece3.component';

describe('Ece3Component', () => {
  let component: Ece3Component;
  let fixture: ComponentFixture<Ece3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ece3Component]
    });
    fixture = TestBed.createComponent(Ece3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
