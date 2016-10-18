import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'sell-beer',
  template: `
  <button class="btn btn-primary" (click)="sellPintHandler()">Sell</button>
  `
})

export class SellBeerComponent {
  @Input() childSelectedKeg: Keg;
  @Output() sellPintSender = new EventEmitter();

  sellPintHandler(){
    this.sellPintSender.emit();
  }

};
