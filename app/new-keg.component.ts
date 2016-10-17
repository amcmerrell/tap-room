import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
  <h2>Add a New Keg</h2>
  <div class="form-group">
    <label>Enter the name of the beer:</label>
    <input class="form-control" #newKegName>
  </div>
  <div class="form-group">
    <label>Enter a description for the beer:</label>
    <input class="form-control" #newKegDescription>
  </div>
  <div class="form-group">
    <label>Enter the ABV for the beer:</label>
    <input class="form-control" #newKegAlcohol>
  </div>
  <div>
    <button class="btn btn-warning" (click)="
      addClicked(newKegName.value, newKegDescription.value, newKegAlcohol.value);
      newKegName.value = '';
      newKegDescription.value = '';
      newKegAlcohol.value = '';
    ">Add Keg</button>
  </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();
  addClicked(name: string, description: string, alcohol: string) {
    var newKegToAdd: Keg = new Keg(name, description, alcohol);
    this.newKegSender.emit(newKegToAdd);
  }
}
