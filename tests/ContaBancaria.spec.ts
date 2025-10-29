import { describe } from "node:test";
import { ContaBancaria } from "../src/model/poo/encapsulamento/ContaBancaria";
import { expect, test } from "vitest";

describe("ContaBancaria", () => {
    let contaBancaria = new ContaBancaria(100, '123');

    describe('Testando instância', () => {
        test('Testando depósito', () => {
           const conta = new ContaBancaria(100, 'A123')
           conta.depositar(20)
           expect(conta.getSaldo()).toBe(120) 
           
        })


        test('Testando o saque sem saldo', () => {
            const conta = new ContaBancaria(0, 'A123')
            // conta.sacar(100)
            expect(conta.sacar(100)).toBe(false)
        })


        test('Testando o saque sem saldo', () => {
            const conta = new ContaBancaria(100, 'A123')
            // conta.sacar(100)
            expect(conta.sacar(100)).toBe(true)
        })
        
        // test('Testando sacar valor maior que o saldo', () => {
        //     const conta = new ContaBancaria(0, '123')
        //     expect(conta.sacar(100)).toBe(false)
        // })



    })

})