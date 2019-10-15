import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayProfilepostsComponent } from './display-profileposts.component';

describe('DisplayProfilepostsComponent', () => {
  let component: DisplayProfilepostsComponent;
  let fixture: ComponentFixture<DisplayProfilepostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayProfilepostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayProfilepostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
