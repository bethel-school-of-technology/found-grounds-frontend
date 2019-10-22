import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayallusersWithdeleteoptionComponent } from './displayallusers-withdeleteoption.component';

describe('DisplayallusersWithdeleteoptionComponent', () => {
  let component: DisplayallusersWithdeleteoptionComponent;
  let fixture: ComponentFixture<DisplayallusersWithdeleteoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayallusersWithdeleteoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayallusersWithdeleteoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
