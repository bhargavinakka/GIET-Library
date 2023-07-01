import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eee4Component } from './eee4.component';

describe('Eee4Component', () => {
  let component: Eee4Component;
  let fixture: ComponentFixture<Eee4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Eee4Component]
    });
    fixture = TestBed.createComponent(Eee4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
