import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuShowed = false;

  constructor() {
  }

  ngOnInit() {
  }

  toggleMenuShowed(): void {
    this.isMenuShowed = !this.isMenuShowed;
  }
}
