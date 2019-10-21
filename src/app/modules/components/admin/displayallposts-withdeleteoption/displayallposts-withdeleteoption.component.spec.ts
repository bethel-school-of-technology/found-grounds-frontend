import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayallpostsWithdeleteoptionComponent } from './displayallposts-withdeleteoption.component';

describe('DisplayallpostsWithdeleteoptionComponent', () => {
  let component: DisplayallpostsWithdeleteoptionComponent;
  let fixture: ComponentFixture<DisplayallpostsWithdeleteoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayallpostsWithdeleteoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayallpostsWithdeleteoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
