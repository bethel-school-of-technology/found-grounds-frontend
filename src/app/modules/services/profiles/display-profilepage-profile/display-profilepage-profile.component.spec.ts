import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayProfilepageProfileComponent } from './display-profilepage-profile.component';

describe('DisplayProfilepageProfileComponent', () => {
  let component: DisplayProfilepageProfileComponent;
  let fixture: ComponentFixture<DisplayProfilepageProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayProfilepageProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayProfilepageProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
