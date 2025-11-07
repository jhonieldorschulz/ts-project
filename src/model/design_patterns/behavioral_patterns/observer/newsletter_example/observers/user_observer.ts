import { Observer } from "../subject/newsletter";

export class UserObserver implements Observer {
  public inbox: string[] = [];
  constructor(public readonly name: string) {}

  update(message: string): void {
    this.inbox.push(`${this.name} received: ${message}`);
  }
}


