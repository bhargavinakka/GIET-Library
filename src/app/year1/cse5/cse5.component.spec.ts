import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cse5Component } from './cse5.component';

describe('Cse5Component', () => {
  let component: Cse5Component;
  let fixture: ComponentFixture<Cse5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cse5Component]
    });
    fixture = TestBed.createComponent(Cse5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
