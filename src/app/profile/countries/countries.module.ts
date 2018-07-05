import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries.component';
import {CountriesRoutingModule} from "./countries-routing.module";

@NgModule({
  imports: [
    CommonModule,
    CountriesRoutingModule
  ],
  declarations: [
    CountriesComponent
  ]
})
export class CountriesModule { }
