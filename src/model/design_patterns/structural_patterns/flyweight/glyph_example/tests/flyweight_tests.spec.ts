import { describe, test, expect } from "vitest";
import { FontFactory } from "../flyweight/font_factory";
import { Glyph } from "../objects/glyph";
import { Application } from "../application";

describe('Flyweight Glyph Example', () => {
  test('Factory reuses fonts', () => {
    const f = new FontFactory();
    const a = f.getFont('Arial', 12);
    const b = f.getFont('Arial', 12);
    expect(a).toBe(b);
    expect(f.cacheSize()).toBe(1);
  });

  test('Application renders word using shared font', () => {
    const res = new Application().renderWord('Hi');
    expect(res.rendered.length).toBe(2);
    expect(res.fonts).toBe(1);
  });
});


