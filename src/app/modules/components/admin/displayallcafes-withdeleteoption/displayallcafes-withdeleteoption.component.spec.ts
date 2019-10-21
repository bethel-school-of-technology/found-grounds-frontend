import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayallcafesWithdeleteoptionComponent } from './displayallcafes-withdeleteoption.component';

describe('DisplayallcafesWithdeleteoptionComponent', () => {
  let component: DisplayallcafesWithdeleteoptionComponent;
  let fixture: ComponentFixture<DisplayallcafesWithdeleteoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayallcafesWithdeleteoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayallcafesWithdeleteoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
