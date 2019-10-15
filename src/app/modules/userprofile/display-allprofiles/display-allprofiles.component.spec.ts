import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllprofilesComponent } from './display-allprofiles.component';

describe('DisplayAllprofilesComponent', () => {
  let component: DisplayAllprofilesComponent;
  let fixture: ComponentFixture<DisplayAllprofilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAllprofilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAllprofilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
