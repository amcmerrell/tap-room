import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';
import { LowBeerPipe }   from './low-beer.pipe';

@Component({
  selector: 'keg-list',
  template: `
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all" selected="selected">Show All</option>
    <option value="low">Show Low Taps</option>
    <option value="normal">Show Not Low Taps</option>
  </select>
    <div *ngFor="let currentKeg of childKegList | lowbeer:selectedVolume">
      <h3> {{ currentKeg.name }} </h3>
      <p> {{ currentKeg.description }} </p>
      <p> ABV: {{ currentKeg.alcohol }} </p>
      <p> Remaining beers: {{ currentKeg.beerVolume }} </p>
      <sell-beer
      [childSelectedKeg] = "currentKeg"
      (sellPintSender) = "sellPint(currentKeg)"
      ></sell-beer>
    </div>
  `

})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  selectedVolume: number = null;
  sellPint(currentKeg: Keg){
    currentKeg.beerVolume--;
  }
  onChange(optionFromMenu){
    this.selectedVolume = optionFromMenu;
  }
}
