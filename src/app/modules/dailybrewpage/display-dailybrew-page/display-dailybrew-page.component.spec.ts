import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDailybrewPageComponent } from './display-dailybrew-page.component';

describe('DisplayDailybrewPageComponent', () => {
  let component: DisplayDailybrewPageComponent;
  let fixture: ComponentFixture<DisplayDailybrewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayDailybrewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDailybrewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
