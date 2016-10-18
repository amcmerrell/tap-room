import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "lowbeer",
  pure: false
})

export class LowBeerPipe implements PipeTransform {
  transform(input: Keg[], emptiness) {
    var output: Keg[] = [];
    if (emptiness === "low") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].beerVolume < 10) {
          output.push(input[i]);
        }
      }
    }else if (emptiness === "normal") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].beerVolume >= 10) {
          output.push(input[i]);
        }
      }
    }else{
      return input;
    }
    return output;
  }
}
