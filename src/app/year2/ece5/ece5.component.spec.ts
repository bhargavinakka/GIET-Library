import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ece5Component } from './ece5.component';

describe('Ece5Component', () => {
  let component: Ece5Component;
  let fixture: ComponentFixture<Ece5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ece5Component]
    });
    fixture = TestBed.createComponent(Ece5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
