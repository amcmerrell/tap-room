import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
    <div class="well form-well" *ngIf="childSelectedKeg">
      <h2>Edit Keg</h2>
      <div class="form-group">
        <label>Enter the name of the beer:</label>
        <input class="form-control" [(ngModel)]="childSelectedKeg.name">
      </div>
      <div class="form-group">
        <label>Enter a description for the beer:</label>
        <input class="form-control" [(ngModel)]="childSelectedKeg.description">
      </div>
      <div class="form-group">
        <label>Enter the ABV for the beer:</label>
        <input class="form-control" [(ngModel)]="childSelectedKeg.alcohol">
      </div>
      <button class="btn btn-primary"(click)="doneClicked()">Done</button>
    </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
