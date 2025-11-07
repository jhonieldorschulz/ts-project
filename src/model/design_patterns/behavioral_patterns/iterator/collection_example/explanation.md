### Por que Iterator?

Fornece uma maneira uniforme de percorrer elementos de uma coleção sem expor sua representação interna.

### Problema: Cenário Caótico SEM Iterator

**Cliente conhece detalhes internos da coleção:**

```typescript
// ❌ PROBLEMA: Cliente conhece estrutura interna
class WordsCollection {
  private words: string[] = [];
  
  add(word: string): void { this.words.push(word); }
  getWords(): string[] { return this.words; } // ❌ Expõe estrutura interna
}

// ❌ Cliente precisa conhecer que é um array
const collection = new WordsCollection();
collection.add('a');
collection.add('b');
collection.add('c');

// ❌ Cliente conhece detalhes de implementação
const words = collection.getWords();
for (let i = 0; i < words.length; i++) { // ❌ Conhece que é array
  console.log(words[i]);
}

// ❌ Problemas:
// 1. Cliente acoplado à estrutura interna (array)
// 2. Difícil mudar implementação (ex: usar linked list)
// 3. Difícil adicionar novos tipos de iteração (ex: reverse, filter)
// 4. Violação do princípio de encapsulamento
// 5. Código duplicado para iterar em diferentes lugares
```

**Problemas:**
- Cliente acoplado à estrutura interna da coleção
- Difícil mudar implementação sem quebrar o cliente
- Difícil adicionar novos tipos de iteração
- Violação do princípio de encapsulamento
- Código duplicado para iterar

### Solução: Iterator Pattern

O Iterator encapsula a iteração:

```typescript
// ✅ SOLUÇÃO: Cliente não conhece estrutura interna
const collection = new WordsCollection(['a', 'b', 'c']);
for (const word of collection) { // Interface uniforme
  console.log(word);
}
```

### Composição

- **Aggregate (WordsCollection)** implementa `Iterable`.
- **Iterator**: protocolo JS `Iterator<T>` via `[Symbol.iterator]()`.
- **Client (Application)** usa `for..of`/spread.

---

# PlantUML

```plantuml
@startuml Iterator_Collection
class WordsCollection { +[Symbol.iterator]() }
interface Iterator { +next() }
WordsCollection --> Iterator
@enduml
```

---

### Uso

```ts
import { Application } from "./application";
console.log(new Application().iterate());
```


