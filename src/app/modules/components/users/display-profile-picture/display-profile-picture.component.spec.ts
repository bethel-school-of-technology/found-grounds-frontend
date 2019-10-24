import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayProfilePictureComponent } from './display-profile-picture.component';

describe('DisplayProfilePictureComponent', () => {
  let component: DisplayProfilePictureComponent;
  let fixture: ComponentFixture<DisplayProfilePictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayProfilePictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayProfilePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
