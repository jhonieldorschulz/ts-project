"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    falar() {
        return `Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
    envelhecer(anos = 1) {
        this.idade += anos;
    }
    equals(outro) {
        if (!(outro instanceof Pessoa))
            return false;
        return this.nome === outro.nome && this.idade === outro.idade;
    }
    toString() {
        return `${this.nome} (${this.idade})`;
    }
}
exports.Pessoa = Pessoa;
