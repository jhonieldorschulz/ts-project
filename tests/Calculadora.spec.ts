import { describe } from "node:test";

import { expect, test } from "vitest";
import { Calculadora } from "../src/model/Calculadora";

describe("Calculadora",() => {

    let calculadora = new Calculadora();

    describe('Operações básicas', () => {
        test('deve somar dois números corretamente', () => {
            expect(calculadora.somar(2, 3)).toBe(5);
            expect(calculadora.somar(-1, 1)).toBe(0);
        });

        // test('deve subtrair dois números corretamente', () => {
        //     expect(calculadora.subtrair(5, 3)).toBe(2);
        //     expect(calculadora.subtrair(3, 5)).toBe(-2);
        // });

        // test('deve multiplicar dois números corretamente', () => {
        //     expect(calculadora.multiplicar(4, 3)).toBe(12);
        //     expect(calculadora.multiplicar(0, 5)).toBe(0);
        // });

        // test('deve dividir dois números corretamente', () => {
        //     expect(calculadora.dividir(10, 2)).toBe(5);
        //     expect(calculadora.dividir(5, 2)).toBe(2.5);
        // });

        // test('deve lançar erro ao dividir por zero', () => {
        //     expect(() => calculadora.dividir(10, 0))
        //         .toThrow('Divisão por zero não é permitida');
        // });
    });


})