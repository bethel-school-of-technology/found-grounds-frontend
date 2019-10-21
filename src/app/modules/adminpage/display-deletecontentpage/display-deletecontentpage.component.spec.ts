import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDeletecontentpageComponent } from './display-deletecontentpage.component';

describe('DisplayDeletecontentpageComponent', () => {
  let component: DisplayDeletecontentpageComponent;
  let fixture: ComponentFixture<DisplayDeletecontentpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayDeletecontentpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDeletecontentpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
