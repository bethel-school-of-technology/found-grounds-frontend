import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCafepageComponent } from './display-cafepage.component';

describe('DisplayCafepageComponent', () => {
  let component: DisplayCafepageComponent;
  let fixture: ComponentFixture<DisplayCafepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCafepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCafepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
