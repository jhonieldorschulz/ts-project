import { Transport } from "./transport";

export class Truck implements Transport {
  private loadKg = 0;

  load(weightKg: number): void {
    this.loadKg = weightKg;
  }

  deliver(): string {
    return `Delivering ${this.loadKg}kg by road (truck)`;
  }
}


