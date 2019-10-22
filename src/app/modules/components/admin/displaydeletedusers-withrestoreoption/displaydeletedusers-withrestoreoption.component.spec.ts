import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaydeletedusersWithrestoreoptionComponent } from './displaydeletedusers-withrestoreoption.component';

describe('DisplaydeletedusersWithrestoreoptionComponent', () => {
  let component: DisplaydeletedusersWithrestoreoptionComponent;
  let fixture: ComponentFixture<DisplaydeletedusersWithrestoreoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaydeletedusersWithrestoreoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaydeletedusersWithrestoreoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
