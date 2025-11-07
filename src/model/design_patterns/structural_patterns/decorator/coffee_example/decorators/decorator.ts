import { Coffee } from "../components/coffee";

export abstract class CoffeeDecorator implements Coffee {
  constructor(protected readonly wrappee: Coffee) {}
  abstract cost(): number;
  abstract description(): string;
}

export class MilkDecorator extends CoffeeDecorator {
  cost(): number { return this.wrappee.cost() + 1.5; }
  description(): string { return this.wrappee.description() + ' + milk'; }
}

export class SugarDecorator extends CoffeeDecorator {
  cost(): number { return this.wrappee.cost() + 0.5; }
  description(): string { return this.wrappee.description() + ' + sugar'; }
}


