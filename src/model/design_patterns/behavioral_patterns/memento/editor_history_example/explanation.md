### Por que Memento?

Captura e restaura estados internos sem violar encapsulamento (ex.: histórico de um editor).

### Problema: Cenário Caótico SEM Memento

**Exposição de estado interno e violação de encapsulamento:**

```typescript
// ❌ PROBLEMA: Estado interno exposto ou violação de encapsulamento
class Editor {
  public text: string = ''; // ❌ Expõe estado interno
  
  setText(value: string): void {
    this.text = value;
  }
  
  getState(): string {
    return this.text; // ❌ Expõe estado interno
  }
  
  setState(state: string): void {
    this.text = state; // ❌ Permite modificar estado diretamente
  }
}

// ❌ Ou pior: histórico misturado com Editor
class Editor {
  private text = '';
  private history: string[] = []; // ❌ Mistura responsabilidades
  
  setText(value: string): void {
    this.history.push(this.text); // ❌ Lógica de histórico misturada
    this.text = value;
  }
  
  undo(): void {
    if (this.history.length > 0) {
      this.text = this.history.pop()!; // ❌ Gerenciamento manual
    }
  }
  
  // ❌ Problemas:
  // 1. Editor conhece detalhes de como salvar/restaurar
  // 2. Estado interno exposto ou violação de encapsulamento
  // 3. Difícil adicionar funcionalidades (ex: redo, snapshots)
  // 4. Violação do princípio Single Responsibility
  // 5. Difícil testar histórico isoladamente
}
```

**Problemas:**
- Estado interno exposto ou violação de encapsulamento
- Editor conhece detalhes de como salvar/restaurar
- Difícil adicionar funcionalidades (ex: redo, snapshots)
- Violação do princípio Single Responsibility
- Difícil testar histórico isoladamente

### Solução: Memento Pattern

O Memento encapsula o estado sem violar encapsulamento:

```typescript
// ✅ SOLUÇÃO: Estado encapsulado em Memento
const editor = new Editor();
editor.setText('v1');
const memento = editor.save(); // Estado encapsulado
history.push(memento);
editor.setText('v2');
const m1 = history.pop();
m1?.restore(editor); // Restaura sem expor estado
```

### Composição

- **Originator (Editor)**: cria e restaura mementos.
- **Memento (Memento)**: guarda o estado.
- **Caretaker (History)**: armazena a pilha de mementos.

---

# PlantUML

```plantuml
@startuml Memento_Editor
class Editor { +setText(); +getText(); +save(); +restore() }
class Memento { +getState() }
class History { +push(); +pop() }

Editor --> Memento
History o--> Memento
@enduml
```

---

### Uso

```ts
import { Application } from "./application";
console.log(new Application().flow());
```


