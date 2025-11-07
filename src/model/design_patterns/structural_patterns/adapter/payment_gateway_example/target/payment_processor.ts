export interface PaymentProcessor {
  pay(amountCents: number): string;
}


