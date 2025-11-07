import { describe, test, expect } from "vitest";
import { PricingContext } from "../context/pricing_context";
import { RegularPricing, BlackFridayPricing, VipPricing } from "../strategy/pricing_strategy";

describe('Strategy Pricing Example', () => {
  test('Regular and BlackFriday pricing', () => {
    const ctx = new PricingContext(new RegularPricing());
    expect(ctx.finalPrice(200)).toBe(200);
    ctx.setStrategy(new BlackFridayPricing());
    expect(ctx.finalPrice(200)).toBe(140);
  });

  test('VIP pricing', () => {
    const ctx = new PricingContext(new VipPricing());
    expect(ctx.finalPrice(200)).toBe(170);
  });
});


