import { ClassicPizzaBuilder } from "./builder/pizza_builder";
import { PizzaDirector } from "./director/pizza_director";

export class Application {
  makeMenu(): string[] {
    const builder = new ClassicPizzaBuilder();
    const director = new PizzaDirector(builder);

    const margherita = director.makeMargherita().toString();
    const pepperoni = director.makePepperoniLarge().toString();
    const bacon = director.makeBaconDeluxe().toString();
    return [margherita, pepperoni, bacon];
  }
}


