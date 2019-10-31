import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasteradminpageComponent } from './masteradminpage.component';

describe('MasteradminpageComponent', () => {
  let component: MasteradminpageComponent;
  let fixture: ComponentFixture<MasteradminpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasteradminpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasteradminpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
