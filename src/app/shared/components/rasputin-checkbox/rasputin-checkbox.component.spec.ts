import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RasputinCheckboxComponent } from './rasputin-checkbox.component';

describe('RasputinCheckboxComponent', () => {
  let component: RasputinCheckboxComponent;
  let fixture: ComponentFixture<RasputinCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RasputinCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RasputinCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
