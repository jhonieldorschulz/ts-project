import { describe, test, expect } from "vitest";
import { ClassicPizzaBuilder } from "../builder/pizza_builder";
import { PizzaDirector } from "../director/pizza_director";

describe('Builder Pizza Example', () => {
  test('Director makes standard recipes', () => {
    const director = new PizzaDirector(new ClassicPizzaBuilder());
    const menu = [
      director.makeMargherita().toString(),
      director.makePepperoniLarge().toString(),
      director.makeBaconDeluxe().toString(),
    ];

    expect(menu[0]).toContain('cheese');
    expect(menu[1]).toContain('pepperoni');
    expect(menu[2]).toContain('bacon');
  });

  test('Builder can be used directly for custom pizza', () => {
    const builder = new ClassicPizzaBuilder();
    const custom = builder.reset().size('SMALL').build();
    expect(custom.toString()).toContain('SMALL');
    expect(custom.toString()).toContain('bacon');
  });
});


