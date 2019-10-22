import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaydeletedcafesWithrestoreoptionComponent } from './displaydeletedcafes-withrestoreoption.component';

describe('DisplaydeletedcafesWithrestoreoptionComponent', () => {
  let component: DisplaydeletedcafesWithrestoreoptionComponent;
  let fixture: ComponentFixture<DisplaydeletedcafesWithrestoreoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaydeletedcafesWithrestoreoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaydeletedcafesWithrestoreoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
