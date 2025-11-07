### Por que Visitor?

Separa algoritmos das estruturas de dados que percorrerm, permitindo adicionar novas operações sem modificar os nós.

### Problema: Cenário Caótico SEM Visitor

**Algoritmos misturados com estruturas de dados:**

```typescript
// ❌ PROBLEMA: Algoritmos misturados com nós
class NumberNode {
  constructor(public value: number) {}
  
  eval(): number { // ❌ Algoritmo misturado com estrutura
    return this.value;
  }
  
  print(): string { // ❌ Outro algoritmo misturado
    return String(this.value);
  }
  
  compile(): string { // ❌ Mais um algoritmo misturado
    return `PUSH ${this.value}`;
  }
}

class AddNode {
  constructor(public left: NumberNode | AddNode, public right: NumberNode | AddNode) {}
  
  eval(): number { // ❌ Algoritmo duplicado
    return this.left.eval() + this.right.eval();
  }
  
  print(): string { // ❌ Algoritmo duplicado
    return `(${this.left.print()} + ${this.right.print()})`;
  }
  
  compile(): string { // ❌ Algoritmo duplicado
    return `${this.left.compile()}\n${this.right.compile()}\nADD`;
  }
}

// ❌ Problemas:
// 1. Cada novo algoritmo = modificar todos os nós
// 2. Violação do princípio Open/Closed
// 3. Difícil adicionar novas operações (ex: typeCheck, optimize)
// 4. Algoritmos espalhados entre estruturas
// 5. Difícil testar algoritmos isoladamente
```

**Problemas:**
- Cada novo algoritmo requer modificar todos os nós
- Violação do princípio Open/Closed
- Difícil adicionar novas operações sem modificar estruturas
- Algoritmos espalhados entre estruturas
- Difícil testar algoritmos isoladamente

### Solução: Visitor Pattern

O Visitor separa algoritmos das estruturas:

```typescript
// ✅ SOLUÇÃO: Algoritmos em visitantes separados
const ast = new AddNode(new NumberNode(2), new NumberNode(3));
const evalVisitor = new EvalVisitor();
ast.accept(evalVisitor); // Algoritmo separado da estrutura
```

### Composição

- **Visitor (Visitor, EvalVisitor)** com métodos por tipo de nó.
- **Element/Node (NumberNode, AddNode)** com `accept` que despacha para o visitor.
- **Client (Application)** constrói a estrutura e aplica visitantes.

---

# PlantUML

```plantuml
@startuml Visitor_AST
interface Visitor { +visitNumber(); +visitAdd() }
interface Node { +accept() }
class NumberNode { +value }
class AddNode { +left; +right }
class EvalVisitor

Node <|.. NumberNode
Node <|.. AddNode
Visitor <|.. EvalVisitor
NumberNode --> Visitor : accept
AddNode --> Visitor : accept
@enduml
```

---

### Uso

```ts
import { Application } from "./application";
console.log(new Application().eval());
```


