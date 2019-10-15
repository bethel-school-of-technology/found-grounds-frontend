import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadReviewComponent } from './upload-review.component';

describe('UploadReviewComponent', () => {
  let component: UploadReviewComponent;
  let fixture: ComponentFixture<UploadReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
