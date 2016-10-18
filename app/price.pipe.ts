import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "price",
  pure: false
})

export class PricePipe implements PipeTransform {
  transform(input: Keg[], price) {
    var output: Keg[] = [];
    if (price === "high") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].price > 6) {
          output.push(input[i]);
        }
      }
    } else if (price === "low") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].price <= 6) {
          output.push(input[i]);
        }
      }
    } else {
      return input;
    }
    return output;
  }
}
