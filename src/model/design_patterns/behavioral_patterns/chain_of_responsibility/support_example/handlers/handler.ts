export type Ticket = { severity: 'low' | 'medium' | 'high'; message: string };

export abstract class Handler {
  private next: Handler | null = null;
  setNext(h: Handler): Handler { this.next = h; return h }
  handle(ticket: Ticket): string {
    const res = this.process(ticket);
    if (res) return res;
    return this.next ? this.next.handle(ticket) : 'Unresolved';
  }
  protected abstract process(ticket: Ticket): string | null;
}

export class L1Handler extends Handler {
  protected process(ticket: Ticket): string | null {
    return ticket.severity === 'low' ? `L1 resolved: ${ticket.message}` : null;
  }
}

export class L2Handler extends Handler {
  protected process(ticket: Ticket): string | null {
    return ticket.severity === 'medium' ? `L2 resolved: ${ticket.message}` : null;
  }
}

export class L3Handler extends Handler {
  protected process(ticket: Ticket): string | null {
    return ticket.severity === 'high' ? `L3 resolved: ${ticket.message}` : null;
  }
}


