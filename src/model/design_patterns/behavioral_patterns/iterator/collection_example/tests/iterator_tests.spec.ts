import { describe, test, expect } from "vitest";
import { Application } from "../application";

describe('Iterator Collection Example', () => {
  test('Iterates in order', () => {
    expect(new Application().iterate()).toEqual(['a','b','c']);
  });
});


