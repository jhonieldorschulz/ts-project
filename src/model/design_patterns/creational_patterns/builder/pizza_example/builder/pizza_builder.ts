import { BasicPizza, Pizza, PizzaSize } from "../products/pizza";

export interface PizzaBuilder {
  reset(): this;
  size(size: PizzaSize): this;
  withCheese(): this;
  withPepperoni(): this;
  withBacon(): this;
  withExtraSauce(): this;
  build(): Pizza;
}

export class ClassicPizzaBuilder implements PizzaBuilder {
  private pizza: BasicPizza = new BasicPizza();

  reset(): this {
    this.pizza = new BasicPizza();
    return this;
  }

  size(size: PizzaSize): this {
    this.pizza.size = size;
    return this;
  }

  withCheese(): this {
    this.pizza.cheese = true;
    return this;
  }

  withPepperoni(): this {
    this.pizza.pepperoni = true;
    return this;
  }

  withBacon(): this {
    this.pizza.bacon = true;
    return this;
  }

  withExtraSauce(): this {
    this.pizza.extraSauce = true;
    return this;
  }

  build(): Pizza {
    const built = this.pizza;
    this.reset();
    return built;
  }
}


