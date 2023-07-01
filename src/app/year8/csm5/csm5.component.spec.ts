import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Csm5Component } from './csm5.component';

describe('Csm5Component', () => {
  let component: Csm5Component;
  let fixture: ComponentFixture<Csm5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Csm5Component]
    });
    fixture = TestBed.createComponent(Csm5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
