import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangecafeinfoComponent } from './changecafeinfo.component';

describe('ChangecafeinfoComponent', () => {
  let component: ChangecafeinfoComponent;
  let fixture: ComponentFixture<ChangecafeinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangecafeinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangecafeinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
