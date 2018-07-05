import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RasputinPaperComponent } from './rasputin-paper.component';

describe('RasputinPaperComponent', () => {
  let component: RasputinPaperComponent;
  let fixture: ComponentFixture<RasputinPaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RasputinPaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RasputinPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
