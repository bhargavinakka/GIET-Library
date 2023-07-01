import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ece6Component } from './ece6.component';

describe('Ece6Component', () => {
  let component: Ece6Component;
  let fixture: ComponentFixture<Ece6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ece6Component]
    });
    fixture = TestBed.createComponent(Ece6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
