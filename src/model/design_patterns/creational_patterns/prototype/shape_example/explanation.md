### Por que Prototype?

Clonar objetos existentes para evitar custo de criação/configuração complexa. Útil quando instanciar é caro ou depende de muitos parâmetros.

### Problema: Cenário Caótico SEM Prototype

**Criação complexa e custosa repetida:**

```typescript
// ❌ PROBLEMA: Objetos complexos precisam ser recriados do zero
class Circle {
  constructor(
    public x: number,
    public y: number,
    public color: string,
    public radius: number,
    public strokeWidth: number,
    public opacity: number,
    public fillStyle: string,
    public shadow: { x: number; y: number; blur: number }
  ) {
    // ❌ Construtor com muitos parâmetros
    // ❌ Processamento pesado (ex: validações, cálculos)
  }
}

// ❌ Problema: Duplicar objeto = criar tudo de novo
const original = new Circle(0, 0, 'red', 10, 2, 1, 'solid', { x: 0, y: 0, blur: 0 });
const copy = new Circle(original.x, original.y, original.color, original.radius, 
                        original.strokeWidth, original.opacity, original.fillStyle, 
                        original.shadow); // ❌ Muito verboso e propenso a erros

// ❌ Ou pior: criar objetos complexos configurados manualmente
function createDefaultCircle(): Circle {
  // ❌ Lógica de criação espalhada
  return new Circle(0, 0, 'red', 10, 2, 1, 'solid', { x: 0, y: 0, blur: 0 });
}

// ❌ Problemas:
// 1. Construtores com muitos parâmetros
// 2. Código duplicado para criar cópias
// 3. Difícil manter consistência entre instâncias similares
// 4. Processamento pesado repetido (ex: cálculos, validações)
// 5. Propenso a erros ao copiar manualmente
```

**Problemas:**
- Construtores com muitos parâmetros (telescoping constructors)
- Código duplicado para criar cópias
- Processamento pesado repetido
- Difícil manter consistência
- Propenso a erros ao copiar manualmente

### Solução: Prototype Pattern

O Prototype permite clonar objetos existentes:

```typescript
// ✅ SOLUÇÃO: Clonagem simples e eficiente
const original = new Circle(0, 0, 'red', 10);
const copy = original.clone(); // Clona sem recriar tudo
```

### Composição

- **Prototype (Prototype<T>)**: contrato `clone()`.
- **ConcretePrototype (Circle)**: implementa `clone` retornando cópia profunda suficiente.
- **Client (Application)**: duplica instâncias sem conhecer detalhes de construção.

---

# PlantUML

```plantuml
@startuml Prototype_Shape
interface Prototype { +clone() }
abstract class Shape { +x; +y; +color; +area(); +clone() }
class Circle { +radius }

Prototype <|.. Shape
Shape <|-- Circle
@enduml
```

---

### Uso

```ts
import { Application } from "./application";
console.log(new Application().duplicateCircle());
```


