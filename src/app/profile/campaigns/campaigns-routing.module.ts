import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RasputinDropdownComponent} from "../../shared/components/rasputin-dropdown/rasputin-dropdown.component";
import {RasputinPaperComponent} from "../../shared/components/rasputin-paper/rasputin-paper.component";
import {RasputinDropdownImageTextComponent} from "../../shared/components/rasputin-dropdown/rasputin-dropdown-item/rasputin-dropdown-image-text/rasputin-dropdown-image-text.component";
import {RasputinDropdownTextComponent} from "../../shared/components/rasputin-dropdown/rasputin-dropdown-item/rasputin-dropdown-text/rasputin-dropdown-text.component";
import {HeaderComponent} from "../../shared/components/header/header.component";
import {RasputinCheckboxComponent} from "../../shared/components/rasputin-checkbox/rasputin-checkbox.component";
import {RasputinDropdownItemComponent} from "../../shared/components/rasputin-dropdown/rasputin-dropdown-item/rasputin-dropdown-item.component";
import {BlockDropdownComponent} from "../../shared/components/block-dropdown/block-dropdown.component";
import {RasputinInputComponent} from "../../shared/components/rasputin-input/rasputin-input.component";
import {RasputinModalComponent} from "../../shared/components/rasputin-modal/rasputin-modal.component";

const routes: Routes = [
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CampaignsRoutingModule { }
