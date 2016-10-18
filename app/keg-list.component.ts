import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';
import { LowBeerPipe } from './low-beer.pipe';
import { PricePipe } from './price.pipe';

@Component({
  selector: 'keg-list',
  template: `
  <div class="row">
    <div class="col-md-3">
      <div class="form-group">
        <label>Filter by Volume</label>
        <select (change)="onVolumeChange($event.target.value)" class="filter form-control">
          <option value="all" selected="selected">Show All</option>
          <option value="full">Show Full Taps</option>
          <option value="normal">Show Half Full Taps</option>
          <option value="low">Show Low Taps</option>
        </select>
      </div>
    </div>
    <div class="col-md-3">
      <div class="form-group">
        <label>Filter by Price</label>
        <select (change)="onPriceChange($event.target.value)" class="filter form-control">
          <option value="all" selected="selected">Show All</option>
          <option value="high">Show Expensive Taps</option>
          <option value="low">Show Cheap Taps</option>
        </select>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-3" *ngFor="let currentKeg of childKegList | lowbeer:selectedVolume | price:selectedPrice">
    <div class="well" [style.background-color]="currentKeg.color">
        <h3> {{ currentKeg.name }} </h3>
        <p> {{ currentKeg.description }} </p>
        <p> ABV: {{ currentKeg.alcohol }} </p>
        <p> Price: \${{ currentKeg.price.toFixed(2) }} </p>
        <p> Remaining beers: {{ currentKeg.beerVolume }} </p>
        <sell-beer
          [childSelectedKeg] = "currentKeg"
          (sellPintSender) = "sellPint(currentKeg)"
        ></sell-beer>
        <button (click)="onEditClick(currentKeg)" class="btn btn-warning">Edit</button>
        <delete-keg
          [kegToDelete] = "currentKeg"
          (deleteKegSender) = "onDeleteClick($event)"
        ></delete-keg>
      </div>
    </div>
    <div class="col-md-3" id="add-keg-box">
      <div class="well">
        <button (click)="onAddClick()"class="btn btn-info btn-lg">Add keg</button>
      </div>
    </div>
  </div>
  `

})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() addSender = new EventEmitter();
  selectedVolume: number = null;
  selectedPrice: number = null;
  sellPint(currentKeg: Keg){
    if(currentKeg.beerVolume > 0) {
      currentKeg.beerVolume--;
      if (currentKeg.beerVolume < (Keg.MAXBEERVOLUME * (2/3)) && currentKeg.beerVolume >= (Keg.MAXBEERVOLUME * (1/3))) {
        currentKeg.color = "#e67e22";
      } else if (currentKeg.beerVolume < Keg.MAXBEERVOLUME/3) {
        currentKeg.color = "#c0392b";
      }
      if(currentKeg.beerVolume === 0){
        alert("This keg is out! Add a new keg below.");
      }
    } else {
      alert("This keg is out! Add a new keg below.");
    }
  }

  onDeleteClick(keg: Keg){
    console.log(keg);
    var index: number = this.childKegList.indexOf(keg);
    this.childKegList.splice(index,1);
  }

  onVolumeChange(optionFromMenu){
    this.selectedVolume = optionFromMenu;
  }
  onPriceChange(optionFromMenu){
    this.selectedPrice = optionFromMenu;
  }
  onEditClick(currentKeg: Keg) {
    this.clickSender.emit(currentKeg);
  }
  onAddClick(){
    this.addSender.emit();
  }
}
