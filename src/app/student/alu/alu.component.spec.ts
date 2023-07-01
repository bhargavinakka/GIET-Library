import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AluComponent } from './alu.component';

describe('AluComponent', () => {
  let component: AluComponent;
  let fixture: ComponentFixture<AluComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AluComponent]
    });
    fixture = TestBed.createComponent(AluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
