import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pet8Component } from './pet8.component';

describe('Pet8Component', () => {
  let component: Pet8Component;
  let fixture: ComponentFixture<Pet8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Pet8Component]
    });
    fixture = TestBed.createComponent(Pet8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
