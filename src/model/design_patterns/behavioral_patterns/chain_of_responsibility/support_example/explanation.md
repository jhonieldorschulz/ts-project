### Por que Chain of Responsibility?

Evita `if/else` encadeados encaminhando requisições por uma corrente de handlers até alguém processar.

### Problema: Cenário Caótico SEM Chain of Responsibility

**Código cheio de `if/else` encadeados e difícil de manter:**

```typescript
// ❌ PROBLEMA: Lógica de roteamento com muitos if/else
class SupportSystem {
  routeTicket(ticket: Ticket): string {
    // ❌ Código cheio de if/else encadeados
    if (ticket.severity === 'low') {
      return `L1 resolved: ${ticket.message}`;
    } else if (ticket.severity === 'medium') {
      return `L2 resolved: ${ticket.message}`;
    } else if (ticket.severity === 'high') {
      return `L3 resolved: ${ticket.message}`;
    } else if (ticket.severity === 'critical') {
      // ❌ Novo nível = modificar o método
      return `L4 resolved: ${ticket.message}`;
    }
    return 'Unresolved';
  }
  
  // ❌ Ou pior: múltiplos métodos com lógica duplicada
  handleLow(ticket: Ticket): string | null {
    if (ticket.severity === 'low') return `L1: ${ticket.message}`;
    return null;
  }
  
  handleMedium(ticket: Ticket): string | null {
    if (ticket.severity === 'medium') return `L2: ${ticket.message}`;
    return null;
  }
  
  // ❌ Problemas:
  // 1. Método cresce infinitamente com cada novo handler
  // 2. Difícil reordenar a cadeia de processamento
  // 3. Difícil adicionar novos handlers sem modificar código
  // 4. Violação do princípio Open/Closed
  // 5. Difícil testar handlers isoladamente
}
```

**Problemas:**
- Código cheio de `if/else` encadeados
- Difícil reordenar a cadeia de processamento
- Difícil adicionar novos handlers sem modificar código
- Violação do princípio Open/Closed
- Difícil testar handlers isoladamente

### Solução: Chain of Responsibility Pattern

O Chain of Responsibility encadeia handlers dinamicamente:

```typescript
// ✅ SOLUÇÃO: Handlers encadeados dinamicamente
const l1 = new L1Handler();
const l2 = new L2Handler();
const l3 = new L3Handler();
l1.setNext(l2).setNext(l3); // Cadeia configurável
l1.handle(ticket); // Passa pela cadeia automaticamente
```

### Composição

- **Handler (Handler)** com `setNext` e `handle`.
- **ConcreteHandlers (L1Handler, L2Handler, L3Handler)**.
- **Client (Application)**: constrói corrente e envia tickets.

---

# PlantUML

```plantuml
@startuml Chain_Support
abstract class Handler { +setNext(); +handle(); #process() }
class L1Handler
class L2Handler
class L3Handler

Handler <|-- L1Handler
Handler <|-- L2Handler
Handler <|-- L3Handler
L1Handler --> Handler : next
L2Handler --> Handler : next
@enduml
```

---

### Uso

```ts
import { Application } from "./application";
console.log(new Application().route({ severity: 'high', message: 'DB down' }));
```


