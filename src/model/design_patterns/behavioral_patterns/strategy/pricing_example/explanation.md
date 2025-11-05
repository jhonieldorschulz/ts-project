### Por que Strategy?

Quando há várias variações do mesmo algoritmo e você precisa trocar o comportamento em tempo de execução sem encher o código de `if/else`. Strategy encapsula cada algoritmo atrás de uma interface comum e o cliente (Context) delega para a estratégia atual.

### Problema: Cenário Caótico SEM Strategy

**Código cheio de `if/else` e difícil de manter:**

```typescript
// ❌ PROBLEMA: Lógica de preço espalhada com muitos if/else
class PricingContext {
  finalPrice(basePrice: number, type: 'regular' | 'blackFriday' | 'vip'): number {
    if (type === 'regular') {
      return basePrice;
    } else if (type === 'blackFriday') {
      return basePrice * 0.7;
    } else if (type === 'vip') {
      return basePrice * 0.85;
    } else if (type === 'seasonal') {
      // ❌ Novo tipo = modificar o método
      return basePrice * 0.8;
    } else if (type === 'student') {
      // ❌ Mais um tipo = mais um if
      return basePrice * 0.9;
    }
    return basePrice;
  }
}

// ❌ Problemas:
// 1. Método cresce infinitamente com cada novo tipo
// 2. Difícil testar cada variação isoladamente
// 3. Violação do princípio Open/Closed
// 4. Lógica de negócio misturada com controle de fluxo
// 5. Difícil adicionar lógica complexa (ex: validações específicas)
```

**Problemas:**
- Código cheio de `if/else` ou `switch/case`
- Difícil adicionar novos algoritmos sem modificar o código existente
- Lógica de negócio espalhada e difícil de testar
- Violação do princípio Open/Closed
- Acoplamento entre o contexto e todas as variações

### Solução: Strategy Pattern

O Strategy encapsula cada algoritmo em uma classe separada:

```typescript
// ✅ SOLUÇÃO: Cada algoritmo em sua própria classe
const ctx = new PricingContext(new RegularPricing());
ctx.setStrategy(new BlackFridayPricing()); // Troca em runtime
ctx.setStrategy(new VipPricing()); // Sem modificar código existente
```

### Composição

- **Strategy (PricingStrategy)**: contrato do algoritmo.
- **ConcreteStrategy (RegularPricing, BlackFridayPricing, VipPricing)**: variações do algoritmo.
- **Context (PricingContext)**: mantém a referência à estratégia e delega o cálculo.

### Quando usar

- Existem N variações do mesmo cálculo/regra de negócio.
- Precisa alternar comportamento em runtime (ex.: promoções, regimes tributários).
- Deseja isolar regras para facilitar testes e evolução.

### Trade-offs

- Aumenta número de classes (uma por variação).
- Estratégias devem compartilhar a mesma interface; evite “vazar” detalhes específicos.

---

# PlantUML

```plantuml
@startuml Strategy_Pricing
interface PricingStrategy { +calculate() }
class RegularPricing
class BlackFridayPricing
class VipPricing

PricingStrategy <|.. RegularPricing
PricingStrategy <|.. BlackFridayPricing
PricingStrategy <|.. VipPricing

class PricingContext {
  -strategy: PricingStrategy
  +setStrategy()
  +finalPrice()
}
PricingContext --> PricingStrategy
@enduml
```

---

### Uso

```ts
import { PricingContext } from "./context/pricing_context";
import { RegularPricing, BlackFridayPricing } from "./strategy/pricing_strategy";

const ctx = new PricingContext(new RegularPricing());
console.log(ctx.finalPrice(100)); // 100
ctx.setStrategy(new BlackFridayPricing());
console.log(ctx.finalPrice(100)); // 70
```


