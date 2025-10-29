# Builder

## Intenção
O Builder é um padrão de projeto criacional que permite a você construir objetos complexos passo a passo. O padrão permite que você produza diferentes tipos e representações de um objeto usando o mesmo código de construção.

## Problema
Imagine um objeto complexo que requer uma inicialização laboriosa, com muitos campos e objetos aninhados. Tal código de inicialização geralmente fica enterrado dentro de um construtor monstruoso com muitos parâmetros. Ou pior: espalhado por todo o código cliente.

## Solução
O padrão Builder sugere que você extraia o código de construção do objeto para fora de sua própria classe e mova-o para objetos separados chamados builders.

O padrão organiza a construção do objeto em uma série de etapas. Para criar um objeto, você executa uma série dessas etapas em um objeto builder. A parte importante é que você não precisa chamar todas as etapas. Você chama apenas aquelas etapas que são necessárias para produzir uma configuração particular de um objeto.

## Estrutura
1. **Builder**: Interface que declara os passos de construção comuns a todos os tipos de builders.
2. **Concrete Builders**: Fornecem implementações diferentes para as etapas de construção. Os concrete builders podem produzir produtos que não seguem uma interface comum.
3. **Products**: São os objetos resultantes. Produtos construídos por diferentes builders não precisam pertencer à mesma hierarquia de classes ou interface.
4. **Director**: Define a ordem em que as etapas de construção são chamadas, então você pode criar e reutilizar configurações específicas de produtos.

## Aplicabilidade
- Use o padrão Builder para se livrar de um construtor "telescópico" (com muitos parâmetros).
- Use o Builder quando você quer que seu código seja capaz de criar diferentes representações de algum produto.
- Use o Builder para construir árvores Composite ou outros objetos complexos.

## Implementação
1. Certifique-se de que você pode definir claramente as etapas de construção comuns para todas as representações do produto. Declare estas etapas na interface do builder base.
2. Crie uma classe de director e defina a ordem de execução das etapas de construção.
3. Crie classes concrete builder para cada representação do produto e implemente suas etapas de construção.
4. O cliente deve criar tanto o objeto director quanto o objeto builder, e então associar o builder ao director. O director usa o builder para construir o produto. O cliente obtém o resultado do builder.

## Prós e Contras
### Prós
- Você pode construir objetos passo a passo, adiar etapas de construção ou executar etapas recursivamente.
- Você pode reutilizar o mesmo código de construção quando construindo várias representações de produtos.
- Princípio de responsabilidade única. Você pode isolar o código de construção complexo da lógica de negócio do produto.

### Contras
- A complexidade geral do código aumenta since o padrão requer a criação de várias novas classes.

## Exemplo de Código
```typescript
interface Builder {
    reset(): void;
    buildStepA(): void;
    buildStepB(): void;
    buildStepZ(): void;
}

class ConcreteBuilder1 implements Builder {
    private product: Product1;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.product = new Product1();
    }

    public buildStepA(): void {
        this.product.parts.push('PartA1');
    }

    public buildStepB(): void {
        this.product.parts.push('PartB1');
    }

    public buildStepZ(): void {
        this.product.parts.push('PartZ1');
    }

    public getProduct(): Product1 {
        const result = this.product;
        this.reset();
        return result;
    }
}

class Product1 {
    public parts: string[] = [];

    public listParts(): void {
        console.log(`Product parts: ${this.parts.join(', ')}\n`);
    }
}

class Director {
    private builder: Builder;

    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    public buildMinimalViableProduct(): void {
        this.builder.buildStepA();
    }

    public buildFullFeaturedProduct(): void {
        this.builder.buildStepA();
        this.builder.buildStepB();
        this.builder.buildStepZ();
    }
}

// Exemplo de uso
const director = new Director();
const builder = new ConcreteBuilder1();
director.setBuilder(builder);

console.log('Standard basic product:');
director.buildMinimalViableProduct();
builder.getProduct().listParts();

console.log('Standard full featured product:');
director.buildFullFeaturedProduct();
builder.getProduct().listParts();

// Lembrando: o padrão Builder pode ser usado sem uma classe Director.
console.log('Custom product:');
builder.buildStepA();
builder.buildStepZ();
builder.getProduct().listParts();