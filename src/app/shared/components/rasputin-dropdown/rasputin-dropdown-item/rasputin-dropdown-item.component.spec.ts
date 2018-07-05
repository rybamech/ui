import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RasputinDropdownItemComponent } from './rasputin-dropdown-item.component';

describe('RasputinDropdownItemComponent', () => {
  let component: RasputinDropdownItemComponent;
  let fixture: ComponentFixture<RasputinDropdownItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RasputinDropdownItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RasputinDropdownItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
