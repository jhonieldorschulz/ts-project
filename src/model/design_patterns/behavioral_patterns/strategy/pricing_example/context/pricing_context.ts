import { PricingStrategy } from "../strategy/pricing_strategy";

export class PricingContext {
  constructor(private strategy: PricingStrategy) {}

  setStrategy(strategy: PricingStrategy) {
    this.strategy = strategy;
  }

  finalPrice(basePrice: number): number {
    return this.strategy.calculate(basePrice);
  }
}


