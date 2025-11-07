import { describe, test, expect } from "vitest";
import { Application } from "../application";

describe('Chain of Responsibility Support Example', () => {
  test('Routes to correct level', () => {
    const app = new Application();
    expect(app.route({ severity: 'low', message: 'A' })).toContain('L1');
    expect(app.route({ severity: 'medium', message: 'B' })).toContain('L2');
    expect(app.route({ severity: 'high', message: 'C' })).toContain('L3');
  });
});


