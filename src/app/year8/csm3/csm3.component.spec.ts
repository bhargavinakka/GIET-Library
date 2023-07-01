import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Csm3Component } from './csm3.component';

describe('Csm3Component', () => {
  let component: Csm3Component;
  let fixture: ComponentFixture<Csm3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Csm3Component]
    });
    fixture = TestBed.createComponent(Csm3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
