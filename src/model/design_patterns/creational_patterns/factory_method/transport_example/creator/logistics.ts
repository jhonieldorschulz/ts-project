import { Transport } from "../products/transport";

export abstract class Logistics {
  abstract createTransport(): Transport;
}


