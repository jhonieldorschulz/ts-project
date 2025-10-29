// models/Ave.ts

import { EmissorSom } from "./interfaces/emissor_som";


export abstract class Ave implements EmissorSom {
    protected nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public apresentar(): void {
        console.log(`Eu sou um ${this.nome}`);
    }

    // Método abstrato que deve ser implementado pelas subclasses
    abstract emitirSom(): void;
}