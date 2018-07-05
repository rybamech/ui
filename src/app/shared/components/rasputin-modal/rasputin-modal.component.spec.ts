import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RasputinModalComponent } from './rasputin-modal.component';

describe('RasputinModalComponent', () => {
  let component: RasputinModalComponent;
  let fixture: ComponentFixture<RasputinModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RasputinModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RasputinModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
