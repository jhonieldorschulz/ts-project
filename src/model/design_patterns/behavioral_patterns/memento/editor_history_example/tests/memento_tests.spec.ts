import { describe, test, expect } from "vitest";
import { Application } from "../application";

describe('Memento Editor Example', () => {
  test('Restores previous states', () => {
    const out = new Application().flow();
    expect(out[0]).toBe('v3');
    expect(out[1]).toBe('v1');
  });
});


