### Por que Observer?

Quando múltiplos interessados precisam reagir a mudanças de um sujeito sem acoplamento direto. O Subject emite eventos; Observers se inscrevem e são notificados automaticamente.

### Problema: Cenário Caótico SEM Observer

**Acoplamento forte e notificações manuais:**

```typescript
// ❌ PROBLEMA: Subject conhece todos os observers diretamente
class Newsletter {
  private alice: User;
  private bob: User;
  private charlie: User;
  // ❌ Cada novo usuário = adicionar campo aqui

  constructor(alice: User, bob: User, charlie: User) {
    this.alice = alice;
    this.bob = bob;
    this.charlie = charlie;
  }

  publish(message: string): void {
    // ❌ Notificação manual e acoplada
    this.alice.receive(message);
    this.bob.receive(message);
    this.charlie.receive(message);
    // ❌ Se esquecer de notificar alguém = bug
    // ❌ Se adicionar novo usuário = modificar aqui
  }
}

// ❌ Problemas:
// 1. Subject acoplado a todos os observers
// 2. Difícil adicionar/remover observers dinamicamente
// 3. Subject precisa conhecer a interface de cada observer
// 4. Violação do princípio Open/Closed
// 5. Difícil testar isoladamente
```

**Problemas:**
- Acoplamento forte entre Subject e Observers
- Difícil adicionar/remover observers dinamicamente
- Subject precisa conhecer todos os observers
- Violação do princípio de inversão de dependência
- Difícil testar e manter

### Solução: Observer Pattern

O Observer permite comunicação desacoplada via subscribe/unsubscribe:

```typescript
// ✅ SOLUÇÃO: Subject gerencia lista de observers dinamicamente
const news = new Newsletter();
news.subscribe(user1); // Adiciona sem modificar Newsletter
news.subscribe(user2);
news.unsubscribe(user1); // Remove sem modificar Newsletter
news.publish('Nova edição!'); // Notifica todos automaticamente
```

### Composição

- **Subject (Newsletter)**: gerencia assinaturas e notifica.
- **Observer (UserObserver)**: implementa `update` para reagir.
- **Client**: faz subscribe/unsubscribe e dispara `publish`.

### Quando usar

- UI/eventos, domínios com “broadcast” de alterações, integração entre módulos.

### Cuidados

- Evite vazamento de memória: sempre permita `unsubscribe`.
- Defina contrato de notificação (push de dados vs. pull do estado).

---

# PlantUML

```plantuml
@startuml Observer_Newsletter
interface Observer { +update() }
class Newsletter { +subscribe(); +unsubscribe(); +publish() }
class UserObserver { +name; +inbox; +update() }

Observer <|.. UserObserver
Newsletter --> Observer
@enduml
```

---

### Uso

```ts
import { Newsletter } from "./subject/newsletter";
import { UserObserver } from "./observers/user_observer";

const news = new Newsletter();
const a = new UserObserver('Alice');
const b = new UserObserver('Bob');
news.subscribe(a);
news.subscribe(b);
news.publish('Nova edição!');
```


