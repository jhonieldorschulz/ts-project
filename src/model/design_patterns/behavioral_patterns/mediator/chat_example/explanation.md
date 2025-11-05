### Por que Mediator?

Centraliza a comunicação entre objetos, reduzindo acoplamento e dependências muitos-para-muitos.

### Problema: Cenário Caótico SEM Mediator

**Acoplamento muitos-para-muitos e comunicação direta:**

```typescript
// ❌ PROBLEMA: Cada usuário conhece todos os outros
class User {
  private alice: User | null = null;
  private bob: User | null = null;
  private charlie: User | null = null;
  // ❌ Cada novo usuário = adicionar campo
  
  constructor(public name: string) {}
  
  setAlice(alice: User): void { this.alice = alice; }
  setBob(bob: User): void { this.bob = bob; }
  setCharlie(charlie: User): void { this.charlie = charlie; }
  
  send(message: string): void {
    // ❌ Notificação manual para cada usuário
    if (this.alice) this.alice.receive(`${this.name}: ${message}`);
    if (this.bob) this.bob.receive(`${this.name}: ${message}`);
    if (this.charlie) this.charlie.receive(`${this.name}: ${message}`);
    // ❌ Se esquecer alguém = bug
    // ❌ Se adicionar novo usuário = modificar todos
  }
  
  receive(message: string): void {
    this.inbox.push(message);
  }
}

// ❌ Problemas:
// 1. Acoplamento muitos-para-muitos (n × n conexões)
// 2. Difícil adicionar/remover usuários dinamicamente
// 3. Cada usuário precisa conhecer todos os outros
// 4. Violação do princípio de inversão de dependência
// 5. Difícil testar e manter
```

**Problemas:**
- Acoplamento muitos-para-muitos (n × n conexões)
- Difícil adicionar/remover participantes dinamicamente
- Cada participante precisa conhecer todos os outros
- Violação do princípio de inversão de dependência
- Difícil testar e manter

### Solução: Mediator Pattern

O Mediator centraliza a comunicação:

```typescript
// ✅ SOLUÇÃO: Comunicação centralizada via mediator
const mediator = new ChatMediator();
const a = new User('Alice', mediator);
const b = new User('Bob', mediator);
mediator.register(a.name, a.receive.bind(a));
mediator.register(b.name, b.receive.bind(b));
a.send('Hi'); // Mediator distribui para todos
```

### Composição

- **Mediator (ChatMediator)** com `broadcast` e registro de participantes.
- **Colleagues (User)** interagem apenas via mediator.
- **Client (Application)** monta a sala e registra usuários.

---

# PlantUML

```plantuml
@startuml Mediator_Chat
interface Mediator { +broadcast() }
class ChatMediator { +register(); +broadcast() }
class User { +name; +inbox; +send(); +receive() }

User --> Mediator
ChatMediator ..> User : callbacks
@enduml
```

---

### Uso

```ts
import { Application } from "./application";
console.log(new Application().chat());
```


