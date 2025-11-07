### Por que Facade?

Fornece uma interface simples para um subsistema complexo. Reduz acoplamento do cliente a múltiplas classes.

### Problema: Cenário Caótico SEM Facade

**Cliente precisa conhecer e orquestrar múltiplos subsistemas:**

```typescript
// ❌ PROBLEMA: Cliente precisa conhecer todos os serviços
class Application {
  sendWelcome(user: { email: string; phone: string; deviceId: string }): void {
    // ❌ Cliente conhece EmailService
    const emailService = new EmailService();
    emailService.send(user.email, 'Welcome', 'Hello!');
    
    // ❌ Cliente conhece SmsService
    const smsService = new SmsService();
    smsService.send(user.phone, 'Welcome!');
    
    // ❌ Cliente conhece PushService
    const pushService = new PushService();
    pushService.send(user.deviceId, 'Welcome', 'Hello!');
    
    // ❌ Problemas:
    // 1. Cliente acoplado a múltiplas classes
    // 2. Lógica de orquestração espalhada
    // 3. Difícil adicionar novos serviços (ex: WhatsApp)
    // 4. Violação do princípio Single Responsibility
    // 5. Código duplicado se usado em vários lugares
  }
}
```

**Problemas:**
- Cliente acoplado a múltiplas classes do subsistema
- Lógica de orquestração espalhada pelo código
- Difícil adicionar novos serviços sem modificar o cliente
- Violação do princípio Single Responsibility
- Código duplicado e difícil de manter

### Solução: Facade Pattern

O Facade simplifica a interface do subsistema:

```typescript
// ✅ SOLUÇÃO: Interface simples que encapsula complexidade
const facade = new NotificationFacade();
facade.sendWelcome(user); // Cliente não conhece detalhes internos
```

### Composição

- **Facade (NotificationFacade)**: API simples para operações de alto nível.
- **Subsystems (EmailService, SmsService, PushService)**: serviços internos complexos.
- **Client (qualquer)**: chama apenas a facade.

---

# PlantUML

```plantuml
@startuml Facade_Notification
class NotificationFacade {
  +sendWelcome(user): string[]
}

class EmailService { +send(to, subject, body): string }
class SmsService { +send(to, text): string }
class PushService { +send(deviceId, title, message): string }

NotificationFacade --> EmailService
NotificationFacade --> SmsService
NotificationFacade --> PushService
@enduml
```

---

### Uso

```ts
import { NotificationFacade } from "./notification_facade";

const facade = new NotificationFacade();
const result = facade.sendWelcome({ email: 'a@b.com', phone: '5599', deviceId: 'dev1' });
console.log(result);
```


