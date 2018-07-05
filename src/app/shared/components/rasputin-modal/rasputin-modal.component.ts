import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'rasputin-modal',
  templateUrl: './rasputin-modal.component.html',
  styleUrls: ['./rasputin-modal.component.scss']
})
export class RasputinModalComponent implements OnInit {
  @Input()
  isShowed = true;

  @Output()
  blur: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  hide(): void {
    this.blur.emit();
  }

}
