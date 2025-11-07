import { describe, test, expect } from "vitest";
import { Application } from "../application";

describe('Visitor AST Example', () => {
  test('Evaluates AST via visitor', () => {
    expect(new Application().eval()).toBe(9);
  });
});


