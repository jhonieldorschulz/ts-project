export interface PricingStrategy {
  calculate(basePrice: number): number;
}

export class RegularPricing implements PricingStrategy {
  calculate(basePrice: number): number {
    return basePrice;
  }
}

export class BlackFridayPricing implements PricingStrategy {
  calculate(basePrice: number): number {
    return basePrice * 0.7;
  }
}

export class VipPricing implements PricingStrategy {
  calculate(basePrice: number): number {
    return basePrice * 0.85;
  }
}


