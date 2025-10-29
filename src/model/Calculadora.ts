import { ICalculadora } from "./ICalculadora";

export class Calculadora implements ICalculadora{
    multiplicar(a: number, b: number): number {
        return a * b;
    }
    dividir(a: number, b: number): number {
        return a / b;
    }
    public somar(a: number, b: number): number {
        return a + b;
    }
    public subtrair(a: number, b: number): number {
        return a - b;
    }

    

}