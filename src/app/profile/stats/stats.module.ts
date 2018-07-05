import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from './stats.component';
import {StatsRoutingModule} from "./stats-routing.module";
import {RasputinDropdownImageTextComponent} from "../../shared/components/rasputin-dropdown/rasputin-dropdown-item/rasputin-dropdown-image-text/rasputin-dropdown-image-text.component";
import {RasputinDropdownTextComponent} from "../../shared/components/rasputin-dropdown/rasputin-dropdown-item/rasputin-dropdown-text/rasputin-dropdown-text.component";
import {RasputinDropdownItemComponent} from "../../shared/components/rasputin-dropdown/rasputin-dropdown-item/rasputin-dropdown-item.component";
import {RasputinCheckboxComponent} from "../../shared/components/rasputin-checkbox/rasputin-checkbox.component";
import {RasputinDropdownComponent} from "../../shared/components/rasputin-dropdown/rasputin-dropdown.component";
import {RasputinInputComponent} from "../../shared/components/rasputin-input/rasputin-input.component";
import {RasputinPaperComponent} from "../../shared/components/rasputin-paper/rasputin-paper.component";
import {RasputinModalComponent} from "../../shared/components/rasputin-modal/rasputin-modal.component";
import {HeaderComponent} from "../../shared/components/header/header.component";
import {BlockDropdownComponent} from "../../shared/components/block-dropdown/block-dropdown.component";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StatsRoutingModule
  ],
  declarations: [
    StatsComponent
  ],
  entryComponents: [
    RasputinModalComponent,
    RasputinPaperComponent,
    RasputinCheckboxComponent,
    RasputinInputComponent,
    RasputinDropdownComponent,
    RasputinDropdownItemComponent,
    RasputinDropdownImageTextComponent,
    RasputinDropdownTextComponent,
    HeaderComponent,
    BlockDropdownComponent
  ]
})
export class StatsModule { }
