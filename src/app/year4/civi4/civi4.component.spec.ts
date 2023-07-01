import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Civi4Component } from './civi4.component';

describe('Civi4Component', () => {
  let component: Civi4Component;
  let fixture: ComponentFixture<Civi4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Civi4Component]
    });
    fixture = TestBed.createComponent(Civi4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
