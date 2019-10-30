import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAdminpageComponent } from './display-adminpage.component';

describe('DisplayAdminpageComponent', () => {
  let component: DisplayAdminpageComponent;
  let fixture: ComponentFixture<DisplayAdminpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAdminpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAdminpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
