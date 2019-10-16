import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCommentsComponent } from './display-comments.component';

describe('DisplayCommentsComponent', () => {
  let component: DisplayCommentsComponent;
  let fixture: ComponentFixture<DisplayCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
