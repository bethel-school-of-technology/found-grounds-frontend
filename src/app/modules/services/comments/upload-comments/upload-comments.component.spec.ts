import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCommentsComponent } from './upload-comments.component';

describe('UploadCommentsComponent', () => {
  let component: UploadCommentsComponent;
  let fixture: ComponentFixture<UploadCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
