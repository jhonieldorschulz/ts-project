import { describe, test, expect } from "vitest";
import { SimpleCoffee } from "../components/coffee";
import { MilkDecorator, SugarDecorator } from "../decorators/decorator";

describe('Decorator Coffee Example', () => {
  test('Decorators add cost and description', () => {
    const base = new SimpleCoffee();
    const withMilk = new MilkDecorator(base);
    const full = new SugarDecorator(withMilk);
    expect(full.cost()).toBeCloseTo(7);
    expect(full.description()).toContain('milk');
    expect(full.description()).toContain('sugar');
  });
});


