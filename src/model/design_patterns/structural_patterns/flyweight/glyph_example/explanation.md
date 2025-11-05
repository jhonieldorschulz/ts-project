### Por que Flyweight?

Compartilha objetos intrínsecos para reduzir uso de memória quando existem muitas instâncias semelhantes (ex.: fontes/glyphs).

### Problema: Cenário Caótico SEM Flyweight

**Múltiplas instâncias duplicadas e desperdício de memória:**

```typescript
// ❌ PROBLEMA: Cada glyph cria sua própria fonte
class Glyph {
  private font: { family: string; size: number }; // ❌ Objeto duplicado
  constructor(
    public char: string,
    public x: number,
    public y: number,
    family: string,
    size: number
  ) {
    // ❌ Cria nova instância de fonte para cada glyph
    this.font = { family, size };
  }
  
  render(): string {
    return `${this.char}@(${this.x},${this.y})[${this.font.family}/${this.font.size}]`;
  }
}

// ❌ Problema: 1000 glyphs = 1000 objetos de fonte duplicados
const glyphs: Glyph[] = [];
for (let i = 0; i < 1000; i++) {
  glyphs.push(new Glyph('A', i, 0, 'Arial', 12)); // ❌ 1000 fontes idênticas!
}

// ❌ Problemas:
// 1. Múltiplas instâncias de objetos idênticos
// 2. Desperdício massivo de memória
// 3. Difícil gerenciar objetos compartilhados
// 4. Difícil mudar propriedades compartilhadas (ex: mudar fonte de todos)
// 5. Impacto de performance em grandes quantidades
```

**Problemas:**
- Múltiplas instâncias de objetos idênticos
- Desperdício massivo de memória
- Difícil gerenciar objetos compartilhados
- Difícil mudar propriedades compartilhadas
- Impacto de performance em grandes quantidades

### Solução: Flyweight Pattern

O Flyweight compartilha objetos intrínsecos:

```typescript
// ✅ SOLUÇÃO: Fonte compartilhada entre todos os glyphs
const factory = new FontFactory();
const font = factory.getFont('Arial', 12); // Uma única instância
const glyph1 = new Glyph('A', 0, 0, font);
const glyph2 = new Glyph('B', 1, 0, font); // Mesma instância compartilhada
```

### Composição

- **Flyweight (Font)** e **FlyweightFactory (FontFactory)**
- **Context (Glyph)** carrega dados extrínsecos (posição, char)
- **Client (Application)**

---

# PlantUML

```plantuml
@startuml Flyweight_Glyph
class Font { +family; +size }
class FontFactory { +getFont(); +cacheSize() }
class Glyph { +char; +x; +y; +render() }

FontFactory --> Font
Glyph --> Font
@enduml
```

---

### Uso

```ts
import { Application } from "./application";
console.log(new Application().renderWord('Hello'));
```


