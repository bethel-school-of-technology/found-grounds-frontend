import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllprofilespageComponent } from './display-allprofilespage.component';

describe('DisplayAllprofilespageComponent', () => {
  let component: DisplayAllprofilespageComponent;
  let fixture: ComponentFixture<DisplayAllprofilespageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAllprofilespageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAllprofilespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
