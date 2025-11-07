import { Logistics } from "./creator/logistics";

export class Application {
  private logistics: Logistics;

  constructor(logistics: Logistics) {
    this.logistics = logistics;
  }

  deliverPackage(weightKg: number): string {
    const transport = this.logistics.createTransport();
    transport.load(weightKg);
    return transport.deliver();
  }
}


