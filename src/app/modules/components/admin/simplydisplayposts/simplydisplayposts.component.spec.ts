import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplydisplaypostsComponent } from './simplydisplayposts.component';

describe('SimplydisplaypostsComponent', () => {
  let component: SimplydisplaypostsComponent;
  let fixture: ComponentFixture<SimplydisplaypostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplydisplaypostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplydisplaypostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
