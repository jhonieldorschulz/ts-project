import { describe, test, expect } from "vitest";
import { Application } from "../application";
import { Circle } from "../prototype/shape";

describe('Prototype Shape Example', () => {
  test('Clone duplicates values', () => {
    const c1 = new Circle(1, 2, 'red', 5);
    const c2 = c1.clone();
    expect(c2.area()).toBeCloseTo(c1.area());
  });

  test('Application duplicates circle', () => {
    const out = new Application().duplicateCircle();
    expect(out.original).toBeCloseTo(out.copy);
  });
});


