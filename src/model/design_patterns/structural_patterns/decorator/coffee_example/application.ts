import { SimpleCoffee } from "./components/coffee";
import { MilkDecorator, SugarDecorator } from "./decorators/decorator";

export class Application {
  order(): { desc: string; price: number } {
    const base = new SimpleCoffee();
    const withMilk = new MilkDecorator(base);
    const withMilkAndSugar = new SugarDecorator(withMilk);
    return { desc: withMilkAndSugar.description(), price: withMilkAndSugar.cost() };
  }
}


