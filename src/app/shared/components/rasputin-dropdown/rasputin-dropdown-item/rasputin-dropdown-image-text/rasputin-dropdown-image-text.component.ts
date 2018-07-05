import {Component, Input, OnInit} from '@angular/core';
import {RasputinDropdownInput} from "../../rasputin-dropdown.model";

@Component({
  selector: 'app-rasputin-dropdown-image-text',
  templateUrl: './rasputin-dropdown-image-text.component.html',
  styleUrls: ['./rasputin-dropdown-image-text.component.scss']
})
export class RasputinDropdownImageTextComponent implements OnInit {
  @Input()
  data = null;

  constructor() { }

  ngOnInit() {
  }

}
