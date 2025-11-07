import { PizzaBuilder } from "../builder/pizza_builder";

export class PizzaDirector {
  constructor(private readonly builder: PizzaBuilder) {}

  makeMargherita() {
    return this.builder
      .reset()
      .size('MEDIUM')
      .withCheese()
      .build();
  }

  makePepperoniLarge() {
    return this.builder
      .reset()
      .size('LARGE')
      .withCheese()
      .withPepperoni()
      .build();
  }

  makeBaconDeluxe() {
    return this.builder
      .reset()
      .size('LARGE')
      .withCheese()
      .withBacon()
      .withExtraSauce()
      .build();
  }
}


