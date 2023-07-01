import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pet4Component } from './pet4.component';

describe('Pet4Component', () => {
  let component: Pet4Component;
  let fixture: ComponentFixture<Pet4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Pet4Component]
    });
    fixture = TestBed.createComponent(Pet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
