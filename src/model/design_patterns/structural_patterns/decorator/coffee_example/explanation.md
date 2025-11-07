### Por que Decorator?

Adiciona responsabilidades dinamicamente a objetos sem subclassificar em árvore explosiva.

### Problema: Cenário Caótico SEM Decorator

**Explosão de subclasses e código duplicado:**

```typescript
// ❌ PROBLEMA: Explosão de subclasses para cada combinação
class SimpleCoffee {
  cost(): number { return 5; }
}

class CoffeeWithMilk extends SimpleCoffee {
  cost(): number { return super.cost() + 1.5; }
}

class CoffeeWithSugar extends SimpleCoffee {
  cost(): number { return super.cost() + 0.5; }
}

class CoffeeWithMilkAndSugar extends SimpleCoffee {
  // ❌ Código duplicado
  cost(): number { return 5 + 1.5 + 0.5; }
}

class CoffeeWithMilkAndSugarAndCream extends SimpleCoffee {
  // ❌ Mais uma classe para cada combinação
  cost(): number { return 5 + 1.5 + 0.5 + 2; }
}

// ❌ Problemas:
// 1. Explosão de subclasses (2^n combinações para n decoradores)
// 2. Código duplicado entre classes
// 3. Difícil adicionar novos decoradores (ex: caramelo, chantilly)
// 4. Violação do princípio Open/Closed
// 5. Impossível combinar decoradores dinamicamente em runtime
```

**Problemas:**
- Explosão de subclasses (2^n combinações)
- Código duplicado
- Impossível combinar decoradores dinamicamente
- Difícil adicionar novos decoradores
- Violação do princípio Open/Closed

### Solução: Decorator Pattern

O Decorator permite combinar funcionalidades dinamicamente:

```typescript
// ✅ SOLUÇÃO: Combinações dinâmicas sem explosão de classes
const coffee = new SugarDecorator(new MilkDecorator(new SimpleCoffee()));
// Combinações ilimitadas em runtime
```

### Composição

- **Component (Coffee)**
- **ConcreteComponent (SimpleCoffee)**
- **Decorator (CoffeeDecorator)**
- **ConcreteDecorators (MilkDecorator, SugarDecorator)**
- **Client (Application)**

---

# PlantUML

```plantuml
@startuml Decorator_Coffee
interface Coffee { +cost(): number; +description(): string }
class SimpleCoffee
abstract class CoffeeDecorator
class MilkDecorator
class SugarDecorator

Coffee <|.. SimpleCoffee
Coffee <|.. CoffeeDecorator
CoffeeDecorator <|-- MilkDecorator
CoffeeDecorator <|-- SugarDecorator
CoffeeDecorator o--> Coffee
@enduml
```

---

### Uso

```ts
import { Application } from "./application";
console.log(new Application().order());
```


