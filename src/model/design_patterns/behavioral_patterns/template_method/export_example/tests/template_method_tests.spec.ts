import { describe, test, expect } from "vitest";
import { Application } from "../application";

describe('Template Method Export Example', () => {
  test('Exports CSV and JSON with same pipeline', () => {
    const out = new Application().run();
    expect(out.csv.split('\n')[0]).toBe('id,name');
    expect(out.json.startsWith('JSON:[')).toBe(true);
  });
});


