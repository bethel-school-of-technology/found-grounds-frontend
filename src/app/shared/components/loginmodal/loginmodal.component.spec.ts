import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginmodalComponent } from './loginmodal.component';

describe('LoginmodalComponent', () => {
  let component: LoginmodalComponent;
  let fixture: ComponentFixture<LoginmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
