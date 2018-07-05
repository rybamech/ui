import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RasputinDropdownTextComponent } from './rasputin-dropdown-text.component';

describe('RasputinDropdownTextComponent', () => {
  let component: RasputinDropdownTextComponent;
  let fixture: ComponentFixture<RasputinDropdownTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RasputinDropdownTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RasputinDropdownTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
