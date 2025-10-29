# Singleton

## Intenção
O Singleton é um padrão de projeto criacional que permite garantir que uma classe tenha apenas uma instância, enquanto fornece um ponto de acesso global a essa instância.

## Problema
O padrão Singleton resolve dois problemas de uma só vez:
1. **Garantir que uma classe tenha apenas uma instância**: Isso é útil quando exatamente um objeto é necessário para coordenar ações em todo o sistema.
2. **Fornecer um ponto de acesso global para essa instância**: A instância global deve ser protegida contra ser sobrescrita por outro código.

## Solução
A solução envolve:
- Tornar o construtor da classe privado, para evitar que outros objetos instanciem a classe.
- Criar um método estático de criação que age como um construtor. Este método chama o construtor privado para criar um objeto e o salva em um campo estático. Todas as chamadas subsequentes a este método retornam o objeto em cache.

## Estrutura
- A classe `Singleton` declara o método estático `getInstance` que retorna a mesma instância de sua própria classe.
- O construtor da classe `Singleton` deve ser oculto do código cliente. A chamada do método `getInstance` deve ser a única maneira de obter o objeto Singleton.

## Aplicabilidade
- Use o padrão Singleton quando uma classe em seu programa deve ter apenas uma instância disponível para todos os clientes.
- Use o Singleton quando você precisa de um controle mais rigoroso sobre as variáveis globais.

## Implementação
1. Adicione um campo estático privado na classe para armazenar a instância única.
2. Torne o construtor da classe privado.
3. Implemente um método de criação estático público que retorne a instância única, criando-a se necessário.

## Prós e Contras
### Prós
- Você pode ter certeza de que uma classe tem apenas uma instância.
- Você ganha um ponto de acesso global para essa instância.
- O objeto singleton é inicializado apenas quando for pedido pela primeira vez.

### Contras
- Viola o princípio de responsabilidade única.
- Pode mascarar um design ruim, pois os componentes sabem demais uns sobre os outros.
- Requer tratamento especial em ambientes multithread.

## Exemplo de Código
```typescript
class Singleton {
    private static instance: Singleton;

    private constructor() { }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public someBusinessLogic() {
        // ...
    }
}