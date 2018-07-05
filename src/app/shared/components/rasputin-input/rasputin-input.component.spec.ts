import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RasputinInputComponent } from './rasputin-input.component';

describe('RasputinInputComponent', () => {
  let component: RasputinInputComponent;
  let fixture: ComponentFixture<RasputinInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RasputinInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RasputinInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
