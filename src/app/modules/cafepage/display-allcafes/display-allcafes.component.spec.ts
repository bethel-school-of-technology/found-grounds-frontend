import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllcafesComponent } from './display-allcafes.component';

describe('DisplayAllcafesComponent', () => {
  let component: DisplayAllcafesComponent;
  let fixture: ComponentFixture<DisplayAllcafesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAllcafesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAllcafesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
