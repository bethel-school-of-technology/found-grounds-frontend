import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteadminpageComponent } from './deleteadminpage.component';

describe('DeleteadminpageComponent', () => {
  let component: DeleteadminpageComponent;
  let fixture: ComponentFixture<DeleteadminpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteadminpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteadminpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
