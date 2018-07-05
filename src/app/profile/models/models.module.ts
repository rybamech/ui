import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelsComponent } from './models.component';
import {ModelsRoutingModule} from "./models-routing.module";

@NgModule({
  imports: [
    CommonModule,
    ModelsRoutingModule
  ],
  declarations: [ModelsComponent]
})
export class ModelsModule { }
