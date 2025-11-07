# Exercício 1: Sistema de Controle de Dispositivos Smart Home

## 📋 Descrição do Problema

Crie um sistema de controle de dispositivos smart home (luzes, termostato, portas) onde você precisa:
- Executar comandos
- Desfazer comandos (undo)
- Agendar comandos para execução futura
- Criar macros (sequências de comandos)

O problema é que sem Command, você precisa conhecer cada dispositivo diretamente, tornando difícil implementar undo/redo e agendamento.

## 🎯 Objetivo

Implementar o padrão **Command** para encapsular comandos como objetos.

## 📐 Sugestão de Solução (PlantUML)

```plantuml
@startuml
interface Command {
  +execute(): void
  +undo(): void
}

class LightOnCommand {
  -light: Light
  -previousState: boolean
}

class ThermostatSetCommand {
  -thermostat: Thermostat
  -previousTemp: number
}

class MacroCommand {
  -commands: Command[]
  +addCommand(command: Command): void
}

class Light {
  +turnOn(): void
  +turnOff(): void
  +isOn(): boolean
}

class Thermostat {
  +setTemperature(temp: number): void
  +getTemperature(): number
}

class RemoteControl {
  -history: Command[]
  +executeCommand(command: Command): void
  +undo(): void
}

Command <|.. LightOnCommand
Command <|.. ThermostatSetCommand
Command <|.. MacroCommand
LightOnCommand --> Light
ThermostatSetCommand --> Thermostat
MacroCommand --> Command
RemoteControl --> Command
@enduml
```

## ✅ Critérios de Avaliação

1. ✅ Interface `Command` com métodos execute/undo
2. ✅ Comandos concretos que guardam estado para undo
3. ✅ Classe `RemoteControl` que gerencia histórico
4. ✅ Suporte para undo/redo
5. ✅ Testes validando execução e desfazer

## 💡 Dicas

- Comando guarda estado anterior para undo
- RemoteControl mantém pilha de comandos
- MacroCommand executa múltiplos comandos

