import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayProfilepageComponent } from './display-profilepage.component';

describe('DisplayProfilepageComponent', () => {
  let component: DisplayProfilepageComponent;
  let fixture: ComponentFixture<DisplayProfilepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayProfilepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayProfilepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
