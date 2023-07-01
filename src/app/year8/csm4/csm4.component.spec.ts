import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Csm4Component } from './csm4.component';

describe('Csm4Component', () => {
  let component: Csm4Component;
  let fixture: ComponentFixture<Csm4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Csm4Component]
    });
    fixture = TestBed.createComponent(Csm4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
