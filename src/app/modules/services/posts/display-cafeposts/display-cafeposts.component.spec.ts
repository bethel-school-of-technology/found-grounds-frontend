import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCafepostsComponent } from './display-cafeposts.component';

describe('DisplayCafepostsComponent', () => {
  let component: DisplayCafepostsComponent;
  let fixture: ComponentFixture<DisplayCafepostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCafepostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCafepostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
