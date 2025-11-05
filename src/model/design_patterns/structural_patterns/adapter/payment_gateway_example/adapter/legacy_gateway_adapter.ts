import { PaymentProcessor } from "../target/payment_processor";
import { LegacyGateway } from "../adaptee/legacy_gateway";

export class LegacyGatewayAdapter implements PaymentProcessor {
  constructor(private readonly legacy: LegacyGateway) {}

  pay(amountCents: number): string {
    const valorReais = amountCents / 100;
    const ok = this.legacy.processarPagamento(valorReais);
    return ok ? `Pagamento aprovado: R$ ${valorReais.toFixed(2)}` : 'Pagamento recusado';
  }
}


