import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pet5Component } from './pet5.component';

describe('Pet5Component', () => {
  let component: Pet5Component;
  let fixture: ComponentFixture<Pet5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Pet5Component]
    });
    fixture = TestBed.createComponent(Pet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
