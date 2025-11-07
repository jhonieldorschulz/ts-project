import { describe, test, expect } from "vitest";
import { Application } from "../application";

describe('Command Editor Example', () => {
  test('Undo reverts last change', () => {
    const out = new Application().run();
    expect(out[0]).toBe('World');
    expect(out[1]).toBe('Hello');
  });
});


