import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindeletepostComponent } from './admindeletepost.component';

describe('AdmindeletepostComponent', () => {
  let component: AdmindeletepostComponent;
  let fixture: ComponentFixture<AdmindeletepostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmindeletepostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindeletepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
