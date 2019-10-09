import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayLikesComponent } from './display-likes.component';

describe('DisplayLikesComponent', () => {
  let component: DisplayLikesComponent;
  let fixture: ComponentFixture<DisplayLikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayLikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
