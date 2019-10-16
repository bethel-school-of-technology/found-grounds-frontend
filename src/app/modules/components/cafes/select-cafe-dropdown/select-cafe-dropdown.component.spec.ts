import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCafeDropdownComponent } from './select-cafe-dropdown.component';

describe('SelectCafeDropdownComponent', () => {
  let component: SelectCafeDropdownComponent;
  let fixture: ComponentFixture<SelectCafeDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCafeDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCafeDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
