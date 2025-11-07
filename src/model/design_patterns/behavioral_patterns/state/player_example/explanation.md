### Por que State?

Permite que um objeto altere seu comportamento quando seu estado interno muda, parecendo mudar de classe.

### Problema: Cenário Caótico SEM State

**Muitos `if/else` baseados em flags e comportamento confuso:**

```typescript
// ❌ PROBLEMA: Múltiplos flags e lógica espalhada
class Player {
  private isPlaying = false;
  private isPaused = false;
  private isStopped = false;
  
  play(): string {
    if (this.isPlaying) {
      return 'Already playing'; // ❌ Lógica condicional espalhada
    } else if (this.isPaused) {
      this.isPaused = false;
      this.isPlaying = true;
      return 'Playing';
    } else {
      this.isPlaying = true;
      return 'Playing';
    }
  }
  
  pause(): string {
    if (this.isPaused) {
      return 'Already paused'; // ❌ Mais lógica condicional
    } else if (this.isPlaying) {
      this.isPlaying = false;
      this.isPaused = true;
      return 'Paused';
    }
    return 'Cannot pause';
  }
  
  // ❌ Problemas:
  // 1. Múltiplos flags podem entrar em estados inválidos
  // 2. Lógica condicional espalhada e difícil de manter
  // 3. Difícil adicionar novos estados (ex: loading, buffering)
  // 4. Violação do princípio Open/Closed
  // 5. Difícil testar todas as transições
}
```

**Problemas:**
- Múltiplos flags podem entrar em estados inválidos
- Lógica condicional espalhada e difícil de manter
- Difícil adicionar novos estados sem modificar o código
- Violação do princípio Open/Closed
- Difícil testar todas as transições de estado

### Solução: State Pattern

O State encapsula cada estado em uma classe:

```typescript
// ✅ SOLUÇÃO: Cada estado é uma classe com comportamento próprio
const player = new Player(); // Estado inicial: PausedState
player.play(); // Transição para PlayingState
player.pause(); // Transição para PausedState
```

### Composição

- **State (PlayerState)** e **ConcreteStates (PlayingState, PausedState)**
- **Context (Player)** delega ações ao estado atual e troca de estado.

---

# PlantUML

```plantuml
@startuml State_Player
interface PlayerState { +play(); +pause() }
class PlayingState
class PausedState
class Player { -state: PlayerState; +play(); +pause() }

PlayerState <|.. PlayingState
PlayerState <|.. PausedState
Player --> PlayerState
@enduml
```

---

### Uso

```ts
import { Application } from "./application";
console.log(new Application().demo());
```


