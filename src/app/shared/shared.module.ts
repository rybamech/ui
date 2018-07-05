import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UuidService} from "./services/uuid.service";
import {RasputinInputComponent} from "./components/rasputin-input/rasputin-input.component";
import {RasputinModalComponent} from "./components/rasputin-modal/rasputin-modal.component";
import {RasputinCheckboxComponent} from "./components/rasputin-checkbox/rasputin-checkbox.component";
import {ReferenceDirective} from "./directives/reference.directive";
import {RasputinPaperComponent} from "./components/rasputin-paper/rasputin-paper.component";
import {RasputinDropdownTextComponent} from "./components/rasputin-dropdown/rasputin-dropdown-item/rasputin-dropdown-text/rasputin-dropdown-text.component";
import {RasputinDropdownImageTextComponent} from "./components/rasputin-dropdown/rasputin-dropdown-item/rasputin-dropdown-image-text/rasputin-dropdown-image-text.component";
import {RasputinDropdownItemComponent} from "./components/rasputin-dropdown/rasputin-dropdown-item/rasputin-dropdown-item.component";
import {RasputinDropdownComponent} from "./components/rasputin-dropdown/rasputin-dropdown.component";
import {BlockDropdownComponent} from "./components/block-dropdown/block-dropdown.component";
import {HeaderComponent} from "./components/header/header.component";
import {Routes} from "@angular/router";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RasputinModalComponent,
    RasputinPaperComponent,
    RasputinCheckboxComponent,
    RasputinInputComponent,
    RasputinDropdownComponent,
    RasputinDropdownItemComponent,
    RasputinDropdownImageTextComponent,
    RasputinDropdownTextComponent,
    ReferenceDirective,
    HeaderComponent,
    BlockDropdownComponent
  ],
  providers: [
    UuidService
  ],
  exports: [
    RasputinModalComponent,
    RasputinPaperComponent,
    RasputinCheckboxComponent,
    RasputinInputComponent,
    RasputinDropdownComponent,
    RasputinDropdownItemComponent,
    RasputinDropdownImageTextComponent,
    RasputinDropdownTextComponent,
    ReferenceDirective,
    HeaderComponent,
    BlockDropdownComponent
  ]
})
export class SharedModule { }
