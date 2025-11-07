import { Handler, L1Handler, L2Handler, L3Handler, Ticket } from "./handlers/handler";

export class Application {
  route(ticket: Ticket): string {
    const l1 = new L1Handler();
    const l2 = new L2Handler();
    const l3 = new L3Handler();
    l1.setNext(l2).setNext(l3);
    return l1.handle(ticket);
  }
}


