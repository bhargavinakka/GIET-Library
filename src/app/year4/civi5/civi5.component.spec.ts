import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Civi5Component } from './civi5.component';

describe('Civi5Component', () => {
  let component: Civi5Component;
  let fixture: ComponentFixture<Civi5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Civi5Component]
    });
    fixture = TestBed.createComponent(Civi5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
