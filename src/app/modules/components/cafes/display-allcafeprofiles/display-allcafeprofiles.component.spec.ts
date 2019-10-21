import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllcafeprofilesComponent } from './display-allcafeprofiles.component';

describe('DisplayAllcafeprofilesComponent', () => {
  let component: DisplayAllcafeprofilesComponent;
  let fixture: ComponentFixture<DisplayAllcafeprofilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAllcafeprofilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAllcafeprofilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
