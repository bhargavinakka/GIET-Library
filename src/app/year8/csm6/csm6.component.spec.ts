import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Csm6Component } from './csm6.component';

describe('Csm6Component', () => {
  let component: Csm6Component;
  let fixture: ComponentFixture<Csm6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Csm6Component]
    });
    fixture = TestBed.createComponent(Csm6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
