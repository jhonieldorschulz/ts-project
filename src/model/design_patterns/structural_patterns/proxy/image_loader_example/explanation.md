### Por que Proxy?

Controla acesso a um objeto (lazy loading, segurança, cache, etc.) sem mudar sua interface.

### Problema: Cenário Caótico SEM Proxy

**Carregamento imediato e desperdício de recursos:**

```typescript
// ❌ PROBLEMA: Objeto carrega tudo na criação
class RealImage {
  private loaded = false;
  constructor(private filename: string) {
    this.loadFromDisk(); // ❌ Carrega imediatamente
  }
  
  private loadFromDisk(): void {
    // ❌ Operação pesada executada no construtor
    console.log(`Loading ${this.filename} from disk...`);
    this.loaded = true;
  }
  
  display(): string {
    return `Displaying ${this.filename}`;
  }
}

// ❌ Problema: Carrega todas as imagens mesmo sem usar
const images = [
  new RealImage('photo1.png'), // ❌ Carrega imediatamente
  new RealImage('photo2.png'), // ❌ Carrega imediatamente
  new RealImage('photo3.png'), // ❌ Carrega imediatamente
];
// ❌ Mas talvez só photo1 seja exibida!

// ❌ Problemas:
// 1. Carregamento imediato de recursos pesados
// 2. Desperdício de memória e tempo
// 3. Cliente não tem controle sobre quando carregar
// 4. Difícil adicionar cache ou lazy loading
// 5. Violação do princípio de responsabilidade única
```

**Problemas:**
- Carregamento imediato de recursos pesados
- Desperdício de memória e tempo
- Cliente não tem controle sobre quando carregar
- Difícil adicionar cache ou lazy loading
- Violação do princípio de responsabilidade única

### Solução: Proxy Pattern

O Proxy adia o carregamento até o uso:

```typescript
// ✅ SOLUÇÃO: Carrega apenas quando necessário
const img = new ImageProxy('photo.png'); // Não carrega ainda
img.display(); // Carrega apenas agora
```

### Composição

- **Subject (Image)**
- **RealSubject (RealImage)**
- **Proxy (ImageProxy)**
- **Client (Application)**

---

# PlantUML

```plantuml
@startuml Proxy_Image
interface Image { +display(): string }
class RealImage { -loaded: boolean }
class ImageProxy { -real: RealImage }

Image <|.. RealImage
Image <|.. ImageProxy
ImageProxy --> RealImage
@enduml
```

---

### Uso

```ts
import { Application } from "./application";
console.log(new Application().preview('photo.png'));
```


