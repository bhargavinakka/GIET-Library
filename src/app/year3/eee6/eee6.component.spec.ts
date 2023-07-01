import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eee6Component } from './eee6.component';

describe('Eee6Component', () => {
  let component: Eee6Component;
  let fixture: ComponentFixture<Eee6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Eee6Component]
    });
    fixture = TestBed.createComponent(Eee6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
