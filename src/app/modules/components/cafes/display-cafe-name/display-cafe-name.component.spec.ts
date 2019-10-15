import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCafeNameComponent } from './display-cafe-name.component';

describe('DisplayCafeNameComponent', () => {
  let component: DisplayCafeNameComponent;
  let fixture: ComponentFixture<DisplayCafeNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCafeNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCafeNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
