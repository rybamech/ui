import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ErrorRoutingModule} from "./error-routing.module";
import {ErrorPageComponent} from "./error-page/error-page.component";

@NgModule({
  imports: [
    CommonModule,
    ErrorRoutingModule
  ],
  declarations: [ErrorPageComponent]
})
export class ErrorModule { }
