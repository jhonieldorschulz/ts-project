import { Mediator } from "../mediator/chat_mediator";

export class User {
  public inbox: string[] = [];
  constructor(public readonly name: string, private readonly mediator: Mediator) {}
  receive(msg: string) { this.inbox.push(msg); }
  send(msg: string) { this.mediator.broadcast(this.name, msg); }
}


