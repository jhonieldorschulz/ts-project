### Por que Command?

Para encapsular requisições como objetos, permitindo histórico (undo/redo), filas, agendamento e logs, desacoplando quem pede da lógica que executa.

### Problema: Cenário Caótico SEM Command

**Sem histórico e acoplamento direto:**

```typescript
// ❌ PROBLEMA: Editor gerencia estado diretamente sem histórico
class Editor {
  private text = '';
  private history: string[] = []; // ❌ Mistura estado com histórico
  
  setText(value: string): void {
    this.history.push(this.text); // ❌ Lógica de histórico misturada
    this.text = value;
  }
  
  undo(): void {
    if (this.history.length > 0) {
      this.text = this.history.pop()!; // ❌ Gerenciamento manual de histórico
    }
  }
  
  // ❌ Problemas:
  // 1. Editor conhece detalhes de como fazer undo
  // 2. Difícil adicionar novos comandos (ex: delete, format)
  // 3. Histórico misturado com lógica de negócio
  // 4. Impossível fazer filas ou agendamento de comandos
  // 5. Difícil testar comandos isoladamente
}
```

**Problemas:**
- Lógica de desfazer misturada com lógica de negócio
- Difícil adicionar novos comandos sem modificar o Editor
- Impossível fazer filas ou agendamento
- Difícil testar comandos isoladamente
- Violação do princípio Single Responsibility

### Solução: Command Pattern

O Command encapsula ações como objetos:

```typescript
// ✅ SOLUÇÃO: Comandos encapsulam ações e permitem undo
const command = new SetTextCommand(editor, 'Hello');
command.execute(); // Executa
history.push(command);
const last = history.pop();
last?.undo(); // Desfaz sem modificar Editor
```

### Composição

- **Command (Command)**: interface com `execute` e `undo`.
- **ConcreteCommand (SetTextCommand)**: guarda estado necessário para desfazer.
- **Receiver (Editor)**: executa o trabalho real.
- **Invoker (CommandHistory)**: gerencia a execução e o histórico.
- **Client (Application)**: cria comandos e dispara execução.

### Dicas

- Comandos devem ser pequenos e focados; estados mínimos para `undo`.

---

# PlantUML

```plantuml
@startuml Command_Editor
interface Command { +execute(); +undo() }
class SetTextCommand { -prev }
class Editor { +setText(); +getText() }
class CommandHistory { +push(); +pop() }

Command <|.. SetTextCommand
SetTextCommand --> Editor
CommandHistory o--> Command
@enduml
```

---

### Uso

```ts
import { Application } from "./application";
console.log(new Application().run());
```


