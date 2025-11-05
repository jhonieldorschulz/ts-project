import { describe, test, expect } from "vitest";
import { Application } from "../application";

describe('Interpreter Boolean Example', () => {
  test('Evaluates boolean expression', () => {
    expect(new Application().eval()).toBe(true);
  });
});


