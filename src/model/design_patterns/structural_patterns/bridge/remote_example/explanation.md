### Por que Bridge?

Separa abstração da implementação para que possam variar independentemente (ex.: controles remotos e dispositivos).

### Problema: Cenário Caótico SEM Bridge

**Explosão de classes e acoplamento forte:**

```typescript
// ❌ PROBLEMA: Cada combinação vira uma classe
class BasicRemoteForTV {
  private tv: TV = new TV();
  togglePower(): void { this.tv.toggle(); }
  volumeUp(): void { this.tv.volumeUp(); }
}

class BasicRemoteForRadio {
  private radio: Radio = new Radio();
  togglePower(): void { this.radio.toggle(); }
  volumeUp(): void { this.radio.volumeUp(); }
}

class AdvancedRemoteForTV {
  private tv: TV = new TV();
  togglePower(): void { this.tv.toggle(); }
  volumeUp(): void { this.tv.volumeUp(); }
  mute(): void { this.tv.mute(); }
}

class AdvancedRemoteForRadio {
  private radio: Radio = new Radio();
  togglePower(): void { this.radio.toggle(); }
  volumeUp(): void { this.radio.volumeUp(); }
  mute(): void { this.radio.mute(); }
}

// ❌ Explosão de classes: 2 remotes × 2 devices = 4 classes
// ❌ Se adicionar novo device (ex: AirConditioner) = mais 2 classes
// ❌ Se adicionar novo remote (ex: SmartRemote) = mais 3 classes

// ❌ Problemas:
// 1. Explosão de classes (produto cartesiano)
// 2. Código duplicado entre classes
// 3. Difícil adicionar novos remotes ou devices
// 4. Violação do princípio Open/Closed
// 5. Abstração acoplada à implementação
```

**Problemas:**
- Explosão de classes (produto cartesiano)
- Código duplicado entre classes
- Difícil adicionar novos remotes ou devices
- Violação do princípio Open/Closed
- Abstração acoplada à implementação

### Solução: Bridge Pattern

O Bridge separa abstração de implementação:

```typescript
// ✅ SOLUÇÃO: Remotes e devices variam independentemente
const tv = new TV();
const remote = new AdvancedRemote(tv); // Remote funciona com qualquer Device
const radio = new Radio();
const sameRemote = new AdvancedRemote(radio); // Mesmo remote, device diferente
```

### Composição

- **Abstraction (Remote, AdvancedRemote)**
- **Implementor (Device)** e **ConcreteImplementor (TV)**
- **Client (Application)**

---

# PlantUML

```plantuml
@startuml Bridge_Remote
interface Device { +isEnabled(); +enable(); +disable(); +getVolume(); +setVolume() }
class TV
class Remote { +togglePower(); +volumeUp(); +volumeDown() }
class AdvancedRemote { +mute() }

Device <|.. TV
Remote o--> Device
AdvancedRemote --|> Remote
@enduml
```

---

### Uso

```ts
import { Application } from "./application";
console.log(new Application().demo());
```


