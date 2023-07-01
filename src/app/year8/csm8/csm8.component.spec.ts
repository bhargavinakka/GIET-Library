import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Csm8Component } from './csm8.component';

describe('Csm8Component', () => {
  let component: Csm8Component;
  let fixture: ComponentFixture<Csm8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Csm8Component]
    });
    fixture = TestBed.createComponent(Csm8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
