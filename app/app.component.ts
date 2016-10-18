import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <div class="well" id="title-well">
      <h1>Tap Room</h1>
    </div>
    <div class="well">
      <keg-list
        [childKegList]="masterKegList"
        (clickSender)="setSelectedKeg($event)"
        (addSender)="showAddForm()"
      ></keg-list>
      <edit-keg
        [childSelectedKeg]="selectedKeg"
        (doneClickedSender)="finishedEditing()"
      ></edit-keg>
      <new-keg *ngIf="newKegFormShowing"
        (newKegSender)="addKeg($event)"
      ></new-keg>
      </div>
    </div>
  `
})

export class AppComponent {
  public masterKegList: Keg[] = [
    new Keg("PBR", "Classic and cheap.", "3%", 4),
    new Keg("Rogue", "Portland-made", "6%", 6),
    new Keg("Deschutes", "Another portland beer", "5%", 7),
    new Keg("Big Rig", "Notes of citrus and caramel.", "6%", 9),

  ];
  newKegFormShowing: boolean = false;
  selectedKeg: Keg = null;
  setSelectedKeg(clickedKeg: Keg) {
    console.log(this.masterKegList);
    this.selectedKeg = clickedKeg;
  }

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
    this.newKegFormShowing = false;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  showAddForm(){
    this.newKegFormShowing = true;
  }

}
