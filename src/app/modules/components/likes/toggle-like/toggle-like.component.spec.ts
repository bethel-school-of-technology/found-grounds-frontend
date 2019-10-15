import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleLikeComponent } from './toggle-like.component';

describe('ToggleLikeComponent', () => {
  let component: ToggleLikeComponent;
  let fixture: ComponentFixture<ToggleLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleLikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
