import { describe, test, expect } from "vitest";
import { Application } from "../application";

describe('Bridge Remote Example', () => {
  test('Remote controls device independently', () => {
    const out = new Application().demo();
    expect(out.power).toBe(true);
    expect(out.volume).toBe(0);
  });
});


