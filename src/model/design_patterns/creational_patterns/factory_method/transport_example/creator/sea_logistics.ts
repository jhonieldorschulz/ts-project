import { Logistics } from "./logistics";
import { Transport } from "../products/transport";
import { Ship } from "../products/ship";

export class SeaLogistics extends Logistics {
  createTransport(): Transport {
    return new Ship();
  }
}


