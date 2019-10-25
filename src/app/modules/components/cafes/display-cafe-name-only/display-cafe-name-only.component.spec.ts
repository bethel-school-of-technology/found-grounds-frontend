import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCafeNameOnlyComponent } from './display-cafe-name-only.component';

describe('DisplayCafeNameOnlyComponent', () => {
  let component: DisplayCafeNameOnlyComponent;
  let fixture: ComponentFixture<DisplayCafeNameOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCafeNameOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCafeNameOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
