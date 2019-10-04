import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCommentsProfilePictureComponent } from './display-comments-profile-picture.component';

describe('DisplayCommentsProfilePictureComponent', () => {
  let component: DisplayCommentsProfilePictureComponent;
  let fixture: ComponentFixture<DisplayCommentsProfilePictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCommentsProfilePictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCommentsProfilePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
