import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RasputinDropdownImageTextComponent } from './rasputin-dropdown-image-text.component';

describe('RasputinDropdownImageTextComponent', () => {
  let component: RasputinDropdownImageTextComponent;
  let fixture: ComponentFixture<RasputinDropdownImageTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RasputinDropdownImageTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RasputinDropdownImageTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
