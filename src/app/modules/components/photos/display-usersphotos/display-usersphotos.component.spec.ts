import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayUsersphotosComponent } from './display-usersphotos.component';

describe('DisplayUsersphotosComponent', () => {
  let component: DisplayUsersphotosComponent;
  let fixture: ComponentFixture<DisplayUsersphotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayUsersphotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayUsersphotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
