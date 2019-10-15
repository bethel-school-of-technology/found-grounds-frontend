import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewboxComponent } from './reviewbox.component';

describe('ReviewboxComponent', () => {
  let component: ReviewboxComponent;
  let fixture: ComponentFixture<ReviewboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
