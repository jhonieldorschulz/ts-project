import { describe, expect, test } from "vitest";
import { Personagem } from "./personagem";

describe('Personagem', () => {
    test('Testar correr', () => {
        const personagem = new Personagem('Guerreiro', 100);

        expect(personagem.correr, 'Correndo')
        

    })
})