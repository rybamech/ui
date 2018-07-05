import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferalsComponent } from './referals.component';
import {ReferalRoutingModule} from "./referal-routing.module";

@NgModule({
  imports: [
    CommonModule,
    ReferalRoutingModule
  ],
  declarations: [ReferalsComponent]
})
export class ReferalsModule { }
