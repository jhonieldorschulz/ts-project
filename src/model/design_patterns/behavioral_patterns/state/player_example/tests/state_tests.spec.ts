import { describe, test, expect } from "vitest";
import { Application } from "../application";

describe('State Player Example', () => {
  test('Transitions affect behavior', () => {
    const out = new Application().demo();
    expect(out).toEqual(['Playing','Already playing','Paused','Already paused']);
  });
});


