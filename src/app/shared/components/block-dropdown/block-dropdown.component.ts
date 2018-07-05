import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-block-dropdown',
  templateUrl: './block-dropdown.component.html',
  styleUrls: ['./block-dropdown.component.scss']
})
export class BlockDropdownComponent implements OnInit {
  @Input()
  size = 1;

  isMenuShowed = false;

  constructor() {
  }

  ngOnInit() {
  }

  toggleMenuCondition(): void {
    this.isMenuShowed = !this.isMenuShowed;
  }

  clickHreference(): false {
    this.toggleMenuCondition();
    // prevent default link
    return false;
  }

}
