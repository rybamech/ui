import {Component, Input, OnInit} from '@angular/core';
import {RasputinDropdownInput} from "../../rasputin-dropdown.model";

@Component({
  selector: 'app-rasputin-dropdown-text',
  templateUrl: './rasputin-dropdown-text.component.html',
  styleUrls: ['./rasputin-dropdown-text.component.scss']
})
export class RasputinDropdownTextComponent implements OnInit {
  @Input()
  data = null;

  constructor() { }

  ngOnInit() {
  }

}
