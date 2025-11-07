export interface Observer {
  update(message: string): void;
}

export class Newsletter {
  private observers: Observer[] = [];

  subscribe(o: Observer): void {
    this.observers.push(o);
  }

  unsubscribe(o: Observer): void {
    this.observers = this.observers.filter(x => x !== o);
  }

  publish(message: string): void {
    for (const o of this.observers) {
      o.update(message);
    }
  }
}


