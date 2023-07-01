import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pet7Component } from './pet7.component';

describe('Pet7Component', () => {
  let component: Pet7Component;
  let fixture: ComponentFixture<Pet7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Pet7Component]
    });
    fixture = TestBed.createComponent(Pet7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
