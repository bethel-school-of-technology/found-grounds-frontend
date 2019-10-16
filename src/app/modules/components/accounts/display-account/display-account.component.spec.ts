import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAccountComponent } from './display-account.component';

describe('DisplayAccountComponent', () => {
  let component: DisplayAccountComponent;
  let fixture: ComponentFixture<DisplayAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
