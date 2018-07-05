import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'rasputin-paper',
  templateUrl: './rasputin-paper.component.html',
  styleUrls: ['./rasputin-paper.component.scss']
})
export class RasputinPaperComponent implements OnInit {
  @Input()
  isBorderTopRounded: boolean = true;

  @Input()
  isBorderBottomRounded: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  topBorderRadius(): string {
    return this.isBorderTopRounded ? 'rounded-top-strong' : '';
  }

  bottomBorderRadius(): string {
    return this.isBorderBottomRounded ? 'rounded-bottom-strong' : '';
  }

}
