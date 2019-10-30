import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupUserpageComponent } from './signup-userpage.component';

describe('SignupUserpageComponent', () => {
  let component: SignupUserpageComponent;
  let fixture: ComponentFixture<SignupUserpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupUserpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupUserpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
