import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pet3Component } from './pet3.component';

describe('Pet3Component', () => {
  let component: Pet3Component;
  let fixture: ComponentFixture<Pet3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Pet3Component]
    });
    fixture = TestBed.createComponent(Pet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
