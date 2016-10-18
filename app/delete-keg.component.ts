import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'delete-keg',
  template:`
  <button *ngIf="kegToDelete.beerVolume === 0" (click)="deleteKegHandler(kegToDelete)" class="btn btn-danger">Delete</button>
  `
})

export class DeleteKegComponent {
  @Input() kegToDelete: Keg;
  @Output() deleteKegSender = new EventEmitter();

  deleteKegHandler(kegToDelete) {
    this.deleteKegSender.emit(kegToDelete);
  }

}
