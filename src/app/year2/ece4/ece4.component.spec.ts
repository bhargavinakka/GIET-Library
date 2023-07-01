import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ece4Component } from './ece4.component';

describe('Ece4Component', () => {
  let component: Ece4Component;
  let fixture: ComponentFixture<Ece4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ece4Component]
    });
    fixture = TestBed.createComponent(Ece4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
