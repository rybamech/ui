import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferalCampaignsComponent } from './referal-campaigns.component';

describe('ReferalCampaignsComponent', () => {
  let component: ReferalCampaignsComponent;
  let fixture: ComponentFixture<ReferalCampaignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferalCampaignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferalCampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
