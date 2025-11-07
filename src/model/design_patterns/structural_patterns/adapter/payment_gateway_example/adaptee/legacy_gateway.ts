export class LegacyGateway {
  // API diferente: aceita valor em reais como número, retorna boolean
  processarPagamento(valorReais: number): boolean {
    return valorReais > 0;
  }
}


