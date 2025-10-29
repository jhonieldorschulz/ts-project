import test, { describe } from "node:test";
import { expect } from "vitest";

describe('Retangulo', () => {
    test('Testando calculo de area de um retangulo', () => {
      const retangulo = new Retangulo()

      expect(retangulo).instanceOf(FormaGeometrica)

    })
})