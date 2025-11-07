export interface Mediator {
  broadcast(from: string, message: string): void;
}

export class ChatMediator implements Mediator {
  private users: Map<string, (msg: string) => void> = new Map();
  register(name: string, receive: (msg: string) => void) {
    this.users.set(name, receive);
  }
  broadcast(from: string, message: string): void {
    for (const [name, recv] of this.users.entries()) {
      if (name !== from) recv(`${from}: ${message}`);
    }
  }
}


