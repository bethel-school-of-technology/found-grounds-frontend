import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoreadminpageComponent } from './restoreadminpage.component';

describe('RestoreadminpageComponent', () => {
  let component: RestoreadminpageComponent;
  let fixture: ComponentFixture<RestoreadminpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestoreadminpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoreadminpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
