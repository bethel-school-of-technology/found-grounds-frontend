import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllcafespageComponent } from './display-allcafespage.component';

describe('DisplayAllcafespageComponent', () => {
  let component: DisplayAllcafespageComponent;
  let fixture: ComponentFixture<DisplayAllcafespageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAllcafespageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAllcafespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
