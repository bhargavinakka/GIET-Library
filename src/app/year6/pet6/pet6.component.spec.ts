import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pet6Component } from './pet6.component';

describe('Pet6Component', () => {
  let component: Pet6Component;
  let fixture: ComponentFixture<Pet6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Pet6Component]
    });
    fixture = TestBed.createComponent(Pet6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
