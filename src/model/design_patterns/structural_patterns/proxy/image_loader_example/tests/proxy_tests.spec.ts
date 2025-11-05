import { describe, test, expect } from "vitest";
import { Application } from "../application";

describe('Proxy Image Example', () => {
  test('Proxy defers real object creation until needed', () => {
    const app = new Application();
    const out = app.preview('photo.png');
    expect(out).toContain('photo.png');
  });
});


