import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Tap Room</h1>
    <div class="well">
      <keg-list
        [childKegList]="masterKegList"
        (clickSender)="setSelectedKeg($event)"
      ></keg-list>
    </div>
    <new-keg
      (newKegSender)="addKeg($event)"
    ></new-keg>
  </div>
  `
})

export class AppComponent {
  public masterKegList: Keg[] = [
    new Keg("PBR", "Classic and cheap.", "3%"),
    new Keg("Rogue", "Portland-made", "6%"),
    new Keg("Deschutes", "Another portland beer", "5%"),
  ];
  selectedKeg: Keg = null;
  setSelectedKeg(clickedKeg: Keg) {
    this.selectedKeg = clickedKeg;
  }
  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }
}
