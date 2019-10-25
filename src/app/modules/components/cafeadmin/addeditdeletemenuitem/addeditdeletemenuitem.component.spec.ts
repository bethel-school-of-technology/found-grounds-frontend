import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditdeletemenuitemComponent } from './addeditdeletemenuitem.component';

describe('AddeditdeletemenuitemComponent', () => {
  let component: AddeditdeletemenuitemComponent;
  let fixture: ComponentFixture<AddeditdeletemenuitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditdeletemenuitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditdeletemenuitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
