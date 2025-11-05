import { Transport } from "./transport";

export class Ship implements Transport {
  private loadKg = 0;

  load(weightKg: number): void {
    this.loadKg = weightKg;
  }

  deliver(): string {
    return `Delivering ${this.loadKg}kg by sea (ship)`;
  }
}


