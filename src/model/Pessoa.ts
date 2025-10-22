export class Pessoa {
  constructor(public nome: string, public idade: number) {}

  falar(): string {
    return `Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  }

  envelhecer(anos = 1): void {
    this.idade += anos;
  }

  equals(outro: unknown): boolean {
    if (!(outro instanceof Pessoa)) return false;
    return this.nome === outro.nome && this.idade === outro.idade;
  }

  toString(): string {
    return `${this.nome} (${this.idade})`;
  }
}