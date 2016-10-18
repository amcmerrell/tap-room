import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "lowbeer",
  pure: false
})

export class LowBeerPipe implements PipeTransform {
  transform(input: Keg[], emptiness) {
    var output: Keg[] = [];
    if (emptiness === "normal") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].beerVolume < (Keg.MAXBEERVOLUME * (2/3)) && input[i].beerVolume >= (Keg.MAXBEERVOLUME * (1/3))) {
          output.push(input[i]);
        }
      }
    }else if (emptiness === "low") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].beerVolume < Keg.MAXBEERVOLUME/3) {
          output.push(input[i]);
        }
      }
    } else if (emptiness === "full") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].beerVolume >= Keg.MAXBEERVOLUME * (2/3)) {
          output.push(input[i]);
        }
      }
    }else{
      return input;
    }
    return output;
  }
}
