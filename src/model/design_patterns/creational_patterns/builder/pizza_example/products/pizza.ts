export type PizzaSize = 'SMALL' | 'MEDIUM' | 'LARGE';

export interface Pizza {
  size: PizzaSize;
  cheese: boolean;
  pepperoni: boolean;
  bacon: boolean;
  extraSauce: boolean;
  toString(): string;
}

export class BasicPizza implements Pizza {
  size: PizzaSize = 'MEDIUM';
  cheese = false;
  pepperoni = false;
  bacon = false;
  extraSauce = false;

  toString(): string {
    const toppings = [
      this.cheese && 'cheese',
      this.pepperoni && 'pepperoni',
      this.bacon && 'bacon',
      this.extraSauce && 'extraSauce',
    ].filter(Boolean).join(', ') || 'no toppings';
    return `Pizza(${this.size}) with ${toppings}`;
  }
}


