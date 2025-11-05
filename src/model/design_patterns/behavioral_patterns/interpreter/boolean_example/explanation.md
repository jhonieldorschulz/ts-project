### Por que Interpreter?

Define uma representação para gramática simples e um interpretador que usa essa representação para avaliar expressões.

### Problema: Cenário Caótico SEM Interpreter

**Avaliação manual e parsing inline:**

```typescript
// ❌ PROBLEMA: Avaliação manual e parsing inline
function evaluateBoolean(expression: string, ctx: Context): boolean {
  // ❌ Parsing e avaliação misturados
  if (expression.includes('&&')) {
    const parts = expression.split('&&');
    return parts.every(part => evaluateBoolean(part.trim(), ctx));
  } else if (expression.includes('||')) {
    const parts = expression.split('||');
    return parts.some(part => evaluateBoolean(part.trim(), ctx));
  } else if (expression.startsWith('!')) {
    return !evaluateBoolean(expression.substring(1), ctx);
  } else {
    return ctx[expression.trim()] ?? false;
  }
}

// ❌ Problemas:
// 1. Parsing e avaliação misturados
// 2. Difícil adicionar novos operadores (ex: XOR, NAND)
// 3. Difícil fazer validação de sintaxe
// 4. Difícil fazer otimização (ex: short-circuit)
// 5. Código difícil de manter e testar
```

**Ou pior: múltiplas funções para cada operação:**

```typescript
// ❌ PROBLEMA: Funções separadas sem estrutura
function evalAnd(left: string, right: string, ctx: Context): boolean {
  return evaluateBoolean(left, ctx) && evaluateBoolean(right, ctx);
}

function evalOr(left: string, right: string, ctx: Context): boolean {
  return evaluateBoolean(left, ctx) || evaluateBoolean(right, ctx);
}

// ❌ Problemas:
// 1. Sem representação estruturada da expressão
// 2. Difícil construir expressões complexas
// 3. Difícil fazer análise estática (ex: type checking)
// 4. Difícil fazer transformações (ex: simplificação)
// 5. Código difícil de manter
```

**Problemas:**
- Parsing e avaliação misturados
- Difícil adicionar novos operadores
- Sem representação estruturada da expressão
- Difícil fazer análise estática ou transformações
- Código difícil de manter e testar

### Solução: Interpreter Pattern

O Interpreter cria uma representação estruturada:

```typescript
// ✅ SOLUÇÃO: Representação estruturada e avaliação clara
const expr = new Or(new And(new Var('A'), new Var('B')), new Not(new Var('C')));
const ctx = { A: true, B: false, C: false };
expr.eval(ctx); // Estrutura clara e fácil de estender
```

### Composição

- **AbstractExpression (Expr)** e concretos (**Var, And, Or, Not**)
- **Context (Context)**: mapeia variáveis para valores.
- **Client (Application)**: constrói a expressão e avalia.

---

# PlantUML

```plantuml
@startuml Interpreter_Boolean
interface Expr { +eval() }
class Var { +name }
class And { +left; +right }
class Or { +left; +right }
class Not { +expr }

Expr <|.. Var
Expr <|.. And
Expr <|.. Or
Expr <|.. Not
@enduml
```

---

### Uso

```ts
import { Application } from "./application";
console.log(new Application().eval());
```


