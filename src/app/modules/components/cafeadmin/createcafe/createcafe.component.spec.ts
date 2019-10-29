import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecafeComponent } from './createcafe.component';

describe('CreatecafeComponent', () => {
  let component: CreatecafeComponent;
  let fixture: ComponentFixture<CreatecafeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatecafeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
