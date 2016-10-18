export class Keg {
  public static MAXBEERVOLUME: number = 15;
  public beerVolume: number = Keg.MAXBEERVOLUME;
  public color: string = "#2ecc71";
  constructor(public name: string, public description: string, public alcohol: string, public price: number) {
  }
}
