# Design Patterns - Guia Completo

Este repositório contém implementações práticas dos 23 padrões de projeto GoF (Gang of Four) em TypeScript, com explicações didáticas, diagramas PlantUML e exemplos de problemas que cada padrão resolve.

## 📚 Índice

### Padrões Criacionais (5)
1. [Abstract Factory](#abstract-factory)
2. [Builder](#builder)
3. [Factory Method](#factory-method)
4. [Prototype](#prototype)
5. [Singleton](#singleton)

### Padrões Estruturais (7)
6. [Adapter](#adapter)
7. [Bridge](#bridge)
8. [Composite](#composite)
9. [Decorator](#decorator)
10. [Facade](#facade)
11. [Flyweight](#flyweight)
12. [Proxy](#proxy)

### Padrões Comportamentais (11)
13. [Chain of Responsibility](#chain-of-responsibility)
14. [Command](#command)
15. [Interpreter](#interpreter)
16. [Iterator](#iterator)
17. [Mediator](#mediator)
18. [Memento](#memento)
19. [Observer](#observer)
20. [State](#state)
21. [Strategy](#strategy)
22. [Template Method](#template-method)
23. [Visitor](#visitor)

---

## 📖 Padrões Criacionais

### Abstract Factory
**Localização:** `creational_patterns/abstact_factory/ui_factory_example/`

Permite criar famílias de objetos relacionados sem especificar suas classes concretas.

- **Explicação:** [explanation.md](creational_patterns/abstact_factory/ui_factory_example/explanation.md)
- **Diagrama:** [ui_factory_diagram.puml](creational_patterns/abstact_factory/ui_factory_example/ui_factory_diagram.puml)
- **Código:** [application.ts](creational_patterns/abstact_factory/ui_factory_example/application.ts)
- **Testes:** [tests/ui_factory_tests.spec.ts](creational_patterns/abstact_factory/ui_factory_example/tests/ui_factory_tests.spec.ts)

### Builder
**Localização:** `creational_patterns/builder/pizza_example/`

Constrói objetos complexos passo a passo, separando a construção da representação.

- **Explicação:** [explanation.md](creational_patterns/builder/pizza_example/explanation.md)
- **Diagrama:** [pizza_diagram.puml](creational_patterns/builder/pizza_example/pizza_diagram.puml)
- **Código:** [application.ts](creational_patterns/builder/pizza_example/application.ts)
- **Testes:** [tests/pizza_tests.spec.ts](creational_patterns/builder/pizza_example/tests/pizza_tests.spec.ts)

### Factory Method
**Localização:** `creational_patterns/factory_method/transport_example/`

Define uma interface para criar objetos, mas permite que subclasses decidam qual classe instanciar.

- **Explicação:** [explanation.md](creational_patterns/factory_method/transport_example/explanation.md)
- **Diagrama:** [transport_diagram.puml](creational_patterns/factory_method/transport_example/transport_diagram.puml)
- **Código:** [application.ts](creational_patterns/factory_method/transport_example/application.ts)
- **Testes:** [tests/transport_tests.spec.ts](creational_patterns/factory_method/transport_example/tests/transport_tests.spec.ts)

### Prototype
**Localização:** `creational_patterns/prototype/shape_example/`

Cria novos objetos copiando instâncias existentes (protótipos).

- **Explicação:** [explanation.md](creational_patterns/prototype/shape_example/explanation.md)
- **Diagrama:** [prototype_diagram.puml](creational_patterns/prototype/shape_example/prototype_diagram.puml)
- **Código:** [application.ts](creational_patterns/prototype/shape_example/application.ts)
- **Testes:** [tests/prototype_tests.spec.ts](creational_patterns/prototype/shape_example/tests/prototype_tests.spec.ts)

### Singleton
**Localização:** `creational_patterns/singleton/logger_example/`

Garante que uma classe tenha apenas uma instância e fornece um ponto de acesso global.

- **Explicação:** [explanation.md](creational_patterns/singleton/logger_example/explanation.md)
- **Diagrama:** [logger_diagram.puml](creational_patterns/singleton/logger_example/logger_diagram.puml)
- **Código:** [logger.ts](creational_patterns/singleton/logger_example/logger.ts)
- **Testes:** [tests/logger_tests.spec.ts](creational_patterns/singleton/logger_example/tests/logger_tests.spec.ts)

---

## 🏗️ Padrões Estruturais

### Adapter
**Localização:** `structural_patterns/adapter/payment_gateway_example/`

Permite que classes com interfaces incompatíveis trabalhem juntas.

- **Explicação:** [explanation.md](structural_patterns/adapter/payment_gateway_example/explanation.md)
- **Diagrama:** [adapter_diagram.puml](structural_patterns/adapter/payment_gateway_example/adapter_diagram.puml)
- **Código:** [application.ts](structural_patterns/adapter/payment_gateway_example/application.ts)
- **Testes:** [tests/adapter_tests.spec.ts](structural_patterns/adapter/payment_gateway_example/tests/adapter_tests.spec.ts)

### Bridge
**Localização:** `structural_patterns/bridge/remote_example/`

Separa abstração de implementação, permitindo que variem independentemente.

- **Explicação:** [explanation.md](structural_patterns/bridge/remote_example/explanation.md)
- **Diagrama:** [bridge_diagram.puml](structural_patterns/bridge/remote_example/bridge_diagram.puml)
- **Código:** [application.ts](structural_patterns/bridge/remote_example/application.ts)
- **Testes:** [tests/bridge_tests.spec.ts](structural_patterns/bridge/remote_example/tests/bridge_tests.spec.ts)

### Composite
**Localização:** `structural_patterns/composite/filesystem_example/`

Compose objetos em estruturas de árvore para representar hierarquias parte-todo.

- **Explicação:** [explanation.md](structural_patterns/composite/filesystem_example/explanation.md)
- **Diagrama:** [composite_diagram.puml](structural_patterns/composite/filesystem_example/composite_diagram.puml)
- **Código:** [application.ts](structural_patterns/composite/filesystem_example/application.ts)
- **Testes:** [tests/composite_tests.spec.ts](structural_patterns/composite/filesystem_example/tests/composite_tests.spec.ts)

### Decorator
**Localização:** `structural_patterns/decorator/coffee_example/`

Adiciona responsabilidades a objetos dinamicamente, fornecendo uma alternativa flexível à subclasse.

- **Explicação:** [explanation.md](structural_patterns/decorator/coffee_example/explanation.md)
- **Diagrama:** [decorator_diagram.puml](structural_patterns/decorator/coffee_example/decorator_diagram.puml)
- **Código:** [application.ts](structural_patterns/decorator/coffee_example/application.ts)
- **Testes:** [tests/decorator_tests.spec.ts](structural_patterns/decorator/coffee_example/tests/decorator_tests.spec.ts)

### Facade
**Localização:** `structural_patterns/facade/notification_example/`

Fornece uma interface unificada para um conjunto de interfaces em um subsistema.

- **Explicação:** [explanation.md](structural_patterns/facade/notification_example/explanation.md)
- **Diagrama:** [facade_diagram.puml](structural_patterns/facade/notification_example/facade_diagram.puml)
- **Código:** [notification_facade.ts](structural_patterns/facade/notification_example/notification_facade.ts)
- **Testes:** [tests/facade_tests.spec.ts](structural_patterns/facade/notification_example/tests/facade_tests.spec.ts)

### Flyweight
**Localização:** `structural_patterns/flyweight/glyph_example/`

Usa compartilhamento para suportar grandes quantidades de objetos de granulação fina.

- **Explicação:** [explanation.md](structural_patterns/flyweight/glyph_example/explanation.md)
- **Diagrama:** [flyweight_diagram.puml](structural_patterns/flyweight/glyph_example/flyweight_diagram.puml)
- **Código:** [application.ts](structural_patterns/flyweight/glyph_example/application.ts)
- **Testes:** [tests/flyweight_tests.spec.ts](structural_patterns/flyweight/glyph_example/tests/flyweight_tests.spec.ts)

### Proxy
**Localização:** `structural_patterns/proxy/image_loader_example/`

Fornece um substituto ou placeholder para outro objeto para controlar acesso a ele.

- **Explicação:** [explanation.md](structural_patterns/proxy/image_loader_example/explanation.md)
- **Diagrama:** [proxy_diagram.puml](structural_patterns/proxy/image_loader_example/proxy_diagram.puml)
- **Código:** [application.ts](structural_patterns/proxy/image_loader_example/application.ts)
- **Testes:** [tests/proxy_tests.spec.ts](structural_patterns/proxy/image_loader_example/tests/proxy_tests.spec.ts)

---

## 🎭 Padrões Comportamentais

### Chain of Responsibility
**Localização:** `behavioral_patterns/chain_of_responsibility/support_example/`

Evita acoplar o remetente de uma solicitação ao seu receptor, dando a mais de um objeto a chance de tratar a solicitação.

- **Explicação:** [explanation.md](behavioral_patterns/chain_of_responsibility/support_example/explanation.md)
- **Diagrama:** [chain_diagram.puml](behavioral_patterns/chain_of_responsibility/support_example/chain_diagram.puml)
- **Código:** [application.ts](behavioral_patterns/chain_of_responsibility/support_example/application.ts)
- **Testes:** [tests/chain_tests.spec.ts](behavioral_patterns/chain_of_responsibility/support_example/tests/chain_tests.spec.ts)

### Command
**Localização:** `behavioral_patterns/command/editor_example/`

Encapsula uma solicitação como um objeto, permitindo parametrizar clientes com diferentes solicitações.

- **Explicação:** [explanation.md](behavioral_patterns/command/editor_example/explanation.md)
- **Diagrama:** [command_diagram.puml](behavioral_patterns/command/editor_example/command_diagram.puml)
- **Código:** [application.ts](behavioral_patterns/command/editor_example/application.ts)
- **Testes:** [tests/command_tests.spec.ts](behavioral_patterns/command/editor_example/tests/command_tests.spec.ts)

### Interpreter
**Localização:** `behavioral_patterns/interpreter/boolean_example/`

Define uma representação para uma gramática e um interpretador que usa a representação para interpretar sentenças na linguagem.

- **Explicação:** [explanation.md](behavioral_patterns/interpreter/boolean_example/explanation.md)
- **Diagrama:** [interpreter_diagram.puml](behavioral_patterns/interpreter/boolean_example/interpreter_diagram.puml)
- **Código:** [application.ts](behavioral_patterns/interpreter/boolean_example/application.ts)
- **Testes:** [tests/interpreter_tests.spec.ts](behavioral_patterns/interpreter/boolean_example/tests/interpreter_tests.spec.ts)

### Iterator
**Localização:** `behavioral_patterns/iterator/collection_example/`

Fornece uma maneira de acessar elementos de uma coleção sequencialmente sem expor sua representação subjacente.

- **Explicação:** [explanation.md](behavioral_patterns/iterator/collection_example/explanation.md)
- **Diagrama:** [iterator_diagram.puml](behavioral_patterns/iterator/collection_example/iterator_diagram.puml)
- **Código:** [application.ts](behavioral_patterns/iterator/collection_example/application.ts)
- **Testes:** [tests/iterator_tests.spec.ts](behavioral_patterns/iterator/collection_example/tests/iterator_tests.spec.ts)

### Mediator
**Localização:** `behavioral_patterns/mediator/chat_example/`

Define um objeto que encapsula como um conjunto de objetos interage.

- **Explicação:** [explanation.md](behavioral_patterns/mediator/chat_example/explanation.md)
- **Diagrama:** [mediator_diagram.puml](behavioral_patterns/mediator/chat_example/mediator_diagram.puml)
- **Código:** [application.ts](behavioral_patterns/mediator/chat_example/application.ts)
- **Testes:** [tests/mediator_tests.spec.ts](behavioral_patterns/mediator/chat_example/tests/mediator_tests.spec.ts)

### Memento
**Localização:** `behavioral_patterns/memento/editor_history_example/`

Captura e externaliza o estado interno de um objeto sem violar encapsulamento.

- **Explicação:** [explanation.md](behavioral_patterns/memento/editor_history_example/explanation.md)
- **Diagrama:** [memento_diagram.puml](behavioral_patterns/memento/editor_history_example/memento_diagram.puml)
- **Código:** [application.ts](behavioral_patterns/memento/editor_history_example/application.ts)
- **Testes:** [tests/memento_tests.spec.ts](behavioral_patterns/memento/editor_history_example/tests/memento_tests.spec.ts)

### Observer
**Localização:** `behavioral_patterns/observer/newsletter_example/`

Define uma dependência um-para-muitos entre objetos, de modo que quando um objeto muda de estado, todos os seus dependentes são notificados.

- **Explicação:** [explanation.md](behavioral_patterns/observer/newsletter_example/explanation.md)
- **Diagrama:** [observer_diagram.puml](behavioral_patterns/observer/newsletter_example/observer_diagram.puml)
- **Código:** [application.ts](behavioral_patterns/observer/newsletter_example/application.ts)
- **Testes:** [tests/observer_tests.spec.ts](behavioral_patterns/observer/newsletter_example/tests/observer_tests.spec.ts)

### State
**Localização:** `behavioral_patterns/state/player_example/`

Permite que um objeto altere seu comportamento quando seu estado interno muda.

- **Explicação:** [explanation.md](behavioral_patterns/state/player_example/explanation.md)
- **Diagrama:** [state_diagram.puml](behavioral_patterns/state/player_example/state_diagram.puml)
- **Código:** [application.ts](behavioral_patterns/state/player_example/application.ts)
- **Testes:** [tests/state_tests.spec.ts](behavioral_patterns/state/player_example/tests/state_tests.spec.ts)

### Strategy
**Localização:** `behavioral_patterns/strategy/pricing_example/`

Define uma família de algoritmos, encapsula cada um e os torna intercambiáveis.

- **Explicação:** [explanation.md](behavioral_patterns/strategy/pricing_example/explanation.md)
- **Diagrama:** [strategy_diagram.puml](behavioral_patterns/strategy/pricing_example/strategy_diagram.puml)
- **Código:** [application.ts](behavioral_patterns/strategy/pricing_example/application.ts)
- **Testes:** [tests/strategy_tests.spec.ts](behavioral_patterns/strategy/pricing_example/tests/strategy_tests.spec.ts)

### Template Method
**Localização:** `behavioral_patterns/template_method/export_example/`

Define o esqueleto de um algoritmo em uma operação, postergando alguns passos para subclasses.

- **Explicação:** [explanation.md](behavioral_patterns/template_method/export_example/explanation.md)
- **Diagrama:** [template_method_diagram.puml](behavioral_patterns/template_method/export_example/template_method_diagram.puml)
- **Código:** [application.ts](behavioral_patterns/template_method/export_example/application.ts)
- **Testes:** [tests/template_method_tests.spec.ts](behavioral_patterns/template_method/export_example/tests/template_method_tests.spec.ts)

### Visitor
**Localização:** `behavioral_patterns/visitor/ast_example/`

Representa uma operação a ser executada nos elementos de uma estrutura de objetos.

- **Explicação:** [explanation.md](behavioral_patterns/visitor/ast_example/explanation.md)
- **Diagrama:** [visitor_diagram.puml](behavioral_patterns/visitor/ast_example/visitor_diagram.puml)
- **Código:** [application.ts](behavioral_patterns/visitor/ast_example/application.ts)
- **Testes:** [tests/visitor_tests.spec.ts](behavioral_patterns/visitor/ast_example/tests/visitor_tests.spec.ts)

---

## 📝 Estrutura de Cada Padrão

Cada padrão segue a mesma estrutura didática:

1. **explanation.md**: Explicação do problema, solução e quando usar
2. **\*_diagram.puml**: Diagrama de classes em PlantUML
3. **application.ts**: Código de exemplo prático
4. **tests/\*.spec.ts**: Testes unitários demonstrando o padrão

## 🎯 Como Usar

1. Navegue até o padrão desejado
2. Leia o `explanation.md` para entender o problema e a solução
3. Visualize o diagrama PlantUML (use um renderizador online ou extensão do VS Code)
4. Estude o código em `application.ts`
5. Execute os testes para ver o padrão em ação

## 📚 Referências

- Design Patterns: Elements of Reusable Object-Oriented Software (Gang of Four)
- Refactoring Guru: https://refactoring.guru/design-patterns

