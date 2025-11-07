### Por que Builder?

Quando você precisa construir objetos complexos passo-a-passo, com diferentes combinações de partes, sem criar construtores gigantes (telescoping constructors). Builder separa a construção da representação e permite reuso de passos.

### Problema: Cenário Caótico SEM Builder

**Construtores telescópicos e múltiplos parâmetros opcionais:**

```typescript
// ❌ PROBLEMA: Múltiplos construtores para diferentes combinações
class Pizza {
  constructor(
    size?: PizzaSize,
    cheese?: boolean,
    pepperoni?: boolean,
    bacon?: boolean,
    extraSauce?: boolean
  ) {
    this.size = size ?? 'MEDIUM';
    this.cheese = cheese ?? false;
    this.pepperoni = pepperoni ?? false;
    this.bacon = bacon ?? false;
    this.extraSauce = extraSauce ?? false;
  }
}

// Uso confuso e propenso a erros:
const p1 = new Pizza('LARGE', true, false, false, false); // Qual parâmetro é qual?
const p2 = new Pizza('SMALL', undefined, true, true, false); // undefined em todos os lugares
const p3 = new Pizza('MEDIUM', true, true); // bacon e extraSauce são undefined ou false?

// ❌ Ou pior: múltiplos construtores estáticos
class Pizza {
  static createMargherita() { return new Pizza('MEDIUM', true, false, false, false); }
  static createPepperoniLarge() { return new Pizza('LARGE', true, true, false, false); }
  static createBaconDeluxe() { return new Pizza('LARGE', true, false, true, true); }
  // ... mais 20 métodos estáticos para cada combinação?
}
```

**Problemas:**
- Ordem de parâmetros confusa (qual boolean é qual?)
- Difícil de ler e manter
- Não permite construção passo-a-passo
- Impossível reutilizar passos de construção
- Código duplicado para cada receita

### Solução: Builder Pattern

O Builder permite construir passo-a-passo de forma fluente e legível:

```typescript
// ✅ SOLUÇÃO: Builder fluente e legível
const pizza = builder
  .reset()
  .size('LARGE')
  .withCheese()
  .withPepperoni()
  .build();

// Ou usando Director para receitas padronizadas:
const margherita = director.makeMargherita();
```

### Composição (no estilo usado em Abstract Factory)

- **Builder (PizzaBuilder)**: define os passos de construção (tamanho, toppings, etc.).
- **ConcreteBuilder (ClassicPizzaBuilder)**: implementa os passos e monta o produto.
- **Director (PizzaDirector)**: orquestra a sequência dos passos para receitas padronizadas.
- **Product (Pizza/BasicPizza)**: objeto final montado.
- **Client (Application)**: pode usar o Director para receitas ou chamar o Builder diretamente.

---

# PlantUML (diagrama de classes)

```plantuml
@startuml Builder_Pizza
package "Product" {
  class BasicPizza {
    +size: PizzaSize
    +cheese: boolean
    +pepperoni: boolean
    +bacon: boolean
    +extraSauce: boolean
    +toString(): string
  }
  enum PizzaSize { SMALL; MEDIUM; LARGE }
}

package "Builder" {
  interface PizzaBuilder {
    +reset(): PizzaBuilder
    +size(size: PizzaSize): PizzaBuilder
    +withCheese(): PizzaBuilder
    +withPepperoni(): PizzaBuilder
    +withBacon(): PizzaBuilder
    +withExtraSauce(): PizzaBuilder
    +build(): BasicPizza
  }
  class ClassicPizzaBuilder
  PizzaBuilder <|.. ClassicPizzaBuilder
}

package "Director" {
  class PizzaDirector {
    -builder: PizzaBuilder
    +makeMargherita(): BasicPizza
    +makePepperoniLarge(): BasicPizza
    +makeBaconDeluxe(): BasicPizza
  }
  PizzaDirector --> PizzaBuilder
}

package "Client" {
  class Application {
    +makeMenu(): string[]
  }
}
@enduml
```

---

### Uso

```ts
import { Application } from "./application";
const app = new Application();
console.log(app.makeMenu());
```


