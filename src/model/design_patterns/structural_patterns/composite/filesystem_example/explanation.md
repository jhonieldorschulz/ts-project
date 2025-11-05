### Por que Composite?

Trata objetos individuais e composições de objetos de forma uniforme (árvores).

### Problema: Cenário Caótico SEM Composite

**Tratamento diferente para folhas e composições:**

```typescript
// ❌ PROBLEMA: Tratamento diferente para arquivos e pastas
class File {
  constructor(public name: string, public size: number) {}
  getSize(): number { return this.size; }
}

class Folder {
  private files: File[] = [];
  private folders: Folder[] = []; // ❌ Estrutura separada
  
  addFile(file: File): void { this.files.push(file); }
  addFolder(folder: Folder): void { this.folders.push(folder); }
  
  getSize(): number {
    let total = 0;
    // ❌ Tratamento diferente para arquivos
    for (const file of this.files) {
      total += file.getSize();
    }
    // ❌ Tratamento diferente para pastas
    for (const folder of this.folders) {
      total += folder.getSize();
    }
    return total;
  }
}

// ❌ Problemas:
// 1. Cliente precisa conhecer diferença entre File e Folder
// 2. Código duplicado para tratar arquivos e pastas
// 3. Difícil adicionar novos tipos (ex: Link, Device)
// 4. Violação do princípio Open/Closed
// 5. Lógica de recursão espalhada
```

**Problemas:**
- Cliente precisa tratar folhas e composições de forma diferente
- Código duplicado para tratar diferentes tipos
- Difícil adicionar novos tipos sem modificar o código
- Violação do princípio Open/Closed
- Lógica de recursão espalhada

### Solução: Composite Pattern

O Composite trata folhas e composições uniformemente:

```typescript
// ✅ SOLUÇÃO: Cliente trata tudo igual
const root = new FolderNode('root');
root.add(new FileNode('a.txt', 100));
root.add(new FolderNode('sub')); // Mesmo método add()
console.log(root.size()); // Funciona recursivamente
```

### Composição

- **Component (FSNode)**
- **Leaf (FileNode)**
- **Composite (FolderNode)**
- **Client (Application)**

---

# PlantUML

```plantuml
@startuml Composite_FS
interface FSNode { +name: string; +size(): number }
class FileNode
class FolderNode { +add(node: FSNode): void }

FSNode <|.. FileNode
FSNode <|.. FolderNode
FolderNode o--> FSNode
@enduml
```

---

### Uso

```ts
import { Application } from "./application";
console.log(new Application().sampleTreeSize());
```


