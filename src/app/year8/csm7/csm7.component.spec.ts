import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Csm7Component } from './csm7.component';

describe('Csm7Component', () => {
  let component: Csm7Component;
  let fixture: ComponentFixture<Csm7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Csm7Component]
    });
    fixture = TestBed.createComponent(Csm7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
