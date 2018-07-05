import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferalCampaignsComponent } from './referal-campaigns.component';
import {ReferalCampaignsRoutingModule} from "./referal-campaigns-routing.module";

@NgModule({
  imports: [
    CommonModule,
    ReferalCampaignsRoutingModule
  ],
  declarations: [ReferalCampaignsComponent]
})
export class ReferalCampaignsModule { }
