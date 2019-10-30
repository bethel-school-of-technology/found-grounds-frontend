import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRestorecontentpageComponent } from './display-restorecontentpage.component';

describe('DisplayRestorecontentpageComponent', () => {
  let component: DisplayRestorecontentpageComponent;
  let fixture: ComponentFixture<DisplayRestorecontentpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayRestorecontentpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayRestorecontentpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
