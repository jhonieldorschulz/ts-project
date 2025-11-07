import { PaymentProcessor } from "./target/payment_processor";

export class Application {
  constructor(private readonly processor: PaymentProcessor) {}

  checkout(amountCents: number): string {
    return this.processor.pay(amountCents);
  }
}


