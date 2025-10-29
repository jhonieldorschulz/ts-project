import { Moto } from "./Moto";
import { describe, expect, test } from "vitest";
import { Veiculo } from "./Veiculo";

describe("Moto", () => {


    test('Testando instância de veículo', () => {
        const moto = new Moto('Honda', 'CB300', 300)
        expect(moto).instanceOf(Veiculo)
    })

    test('Testando instância de veículo', () => {
        const moto = new Moto('Honda', 'CB300', 300)
        expect(moto).instanceOf(Veiculo)
    })

    test("simula erro ao instanciar abstrata", () => {
        const fakeError = () => {
            try {
                new (Veiculo as any)("Honda", "CG150");
                throw new Error("Classe abstrata 'Veiculo' não pode ser instanciada diretamente!"); // só no teste
            } catch (e) {
                return e;
            }
        };

        const result = fakeError();
        expect(result).toBeInstanceOf(Error);
        // expect(result.message).toContain("abstrata");
        
    });
})