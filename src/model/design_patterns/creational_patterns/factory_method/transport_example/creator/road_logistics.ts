import { Logistics } from "./logistics";
import { Transport } from "../products/transport";
import { Truck } from "../products/truck";

export class RoadLogistics extends Logistics {
  createTransport(): Transport {
    return new Truck();
  }
}


