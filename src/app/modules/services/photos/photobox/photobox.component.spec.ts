import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoboxComponent } from './photobox.component';

describe('PhotoboxComponent', () => {
  let component: PhotoboxComponent;
  let fixture: ComponentFixture<PhotoboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
