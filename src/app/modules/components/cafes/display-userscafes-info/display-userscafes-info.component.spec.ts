import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayUserscafesInfoComponent } from './display-userscafes-info.component';

describe('DisplayUserscafesInfoComponent', () => {
  let component: DisplayUserscafesInfoComponent;
  let fixture: ComponentFixture<DisplayUserscafesInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayUserscafesInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayUserscafesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
