import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RasputinDropdownComponent } from './rasputin-dropdown.component';

describe('RasputinDropdownComponent', () => {
  let component: RasputinDropdownComponent;
  let fixture: ComponentFixture<RasputinDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RasputinDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RasputinDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
