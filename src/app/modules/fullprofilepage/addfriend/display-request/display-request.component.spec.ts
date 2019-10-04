import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRequestComponent } from './display-request.component';

describe('DisplayRequestComponent', () => {
  let component: DisplayRequestComponent;
  let fixture: ComponentFixture<DisplayRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
