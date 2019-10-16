import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayUserscafesComponent } from './display-userscafes.component';

describe('DisplayUserscafesComponent', () => {
  let component: DisplayUserscafesComponent;
  let fixture: ComponentFixture<DisplayUserscafesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayUserscafesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayUserscafesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
