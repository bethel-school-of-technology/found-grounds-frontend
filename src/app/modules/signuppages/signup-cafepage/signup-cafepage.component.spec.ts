import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupCafepageComponent } from './signup-cafepage.component';

describe('SignupCafepageComponent', () => {
  let component: SignupCafepageComponent;
  let fixture: ComponentFixture<SignupCafepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupCafepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupCafepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
