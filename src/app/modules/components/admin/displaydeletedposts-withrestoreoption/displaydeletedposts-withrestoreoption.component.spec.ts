import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaydeletedpostsWithrestoreoptionComponent } from './displaydeletedposts-withrestoreoption.component';

describe('DisplaydeletedpostsWithrestoreoptionComponent', () => {
  let component: DisplaydeletedpostsWithrestoreoptionComponent;
  let fixture: ComponentFixture<DisplaydeletedpostsWithrestoreoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaydeletedpostsWithrestoreoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaydeletedpostsWithrestoreoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
