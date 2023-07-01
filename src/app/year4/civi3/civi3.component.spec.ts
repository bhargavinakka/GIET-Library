import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Civi3Component } from './civi3.component';

describe('Civi3Component', () => {
  let component: Civi3Component;
  let fixture: ComponentFixture<Civi3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Civi3Component]
    });
    fixture = TestBed.createComponent(Civi3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
