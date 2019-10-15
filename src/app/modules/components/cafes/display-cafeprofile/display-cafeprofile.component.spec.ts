import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCafeprofileComponent } from './display-cafeprofile.component';

describe('DisplayCafeprofileComponent', () => {
  let component: DisplayCafeprofileComponent;
  let fixture: ComponentFixture<DisplayCafeprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCafeprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCafeprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
