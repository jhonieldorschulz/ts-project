# Exercício 5: Sistema de Logging Multi-Destino

## 📋 Descrição do Problema

Um sistema precisa suportar logging para diferentes destinos (Console, File, Database). Cada destino tem componentes específicos:

- **Console**: `ConsoleFormatter`, `ConsoleWriter`, `ConsoleAppender`
- **File**: `FileFormatter`, `FileWriter`, `FileAppender`
- **Database**: `DatabaseFormatter`, `DatabaseWriter`, `DatabaseAppender`

O sistema precisa garantir que não seja possível misturar componentes de destinos diferentes (ex: `ConsoleFormatter` com `FileWriter`). O sistema deve permitir configurar múltiplos destinos simultaneamente.

## 🎯 Objetivo

Implementar o padrão **Abstract Factory** para criar famílias de componentes de logging compatíveis por destino.

## 📐 Sugestão de Solução (PlantUML)

```plantuml
@startuml
package "Products" {
  interface LogFormatter {
    +format(level: string, message: string): string
  }
  
  interface LogWriter {
    +write(formatted: string): void
  }
  
  interface LogAppender {
    +append(level: string, message: string): void
  }
  
  class ConsoleFormatter
  class ConsoleWriter
  class ConsoleAppender
  
  class FileFormatter
  class FileWriter
  class FileAppender
  
  class DatabaseFormatter
  class DatabaseWriter
  class DatabaseAppender
  
  LogFormatter <|.. ConsoleFormatter
  LogFormatter <|.. FileFormatter
  LogFormatter <|.. DatabaseFormatter
  
  LogWriter <|.. ConsoleWriter
  LogWriter <|.. FileWriter
  LogWriter <|.. DatabaseWriter
  
  LogAppender <|.. ConsoleAppender
  LogAppender <|.. FileAppender
  LogAppender <|.. DatabaseAppender
}

package "Factory" {
  interface LogDestinationFactory {
    +createFormatter(): LogFormatter
    +createWriter(): LogWriter
    +createAppender(): LogAppender
  }
  
  class ConsoleLogFactory
  class FileLogFactory
  class DatabaseLogFactory
  
  LogDestinationFactory <|.. ConsoleLogFactory
  LogDestinationFactory <|.. FileLogFactory
  LogDestinationFactory <|.. DatabaseLogFactory
  
  ConsoleLogFactory --> ConsoleFormatter
  ConsoleLogFactory --> ConsoleWriter
  ConsoleLogFactory --> ConsoleAppender
  
  FileLogFactory --> FileFormatter
  FileLogFactory --> FileWriter
  FileLogFactory --> FileAppender
  
  DatabaseLogFactory --> DatabaseFormatter
  DatabaseLogFactory --> DatabaseWriter
  DatabaseLogFactory --> DatabaseAppender
}

package "Client" {
  class Logger {
    -factories: LogDestinationFactory[]
    +constructor(factories: LogDestinationFactory[])
    +log(level: string, message: string): void
  }
  
  Logger --> LogDestinationFactory
  Logger --> LogFormatter
  Logger --> LogWriter
  Logger --> LogAppender
}
@enduml
```

## ✅ Critérios de Avaliação

1. ✅ Três interfaces abstratas para componentes de logging
2. ✅ Implementações concretas para cada destino
3. ✅ Fábricas que garantem compatibilidade
4. ✅ Cliente suporta múltiplos destinos simultaneamente
5. ✅ Testes validando logs em diferentes destinos

## 💡 Dicas

- O método `log` deve: formatar → escrever → anexar para cada destino
- Suporte múltiplos níveis de log (INFO, WARN, ERROR)
- Implemente rotação de arquivos para `FileAppender`

