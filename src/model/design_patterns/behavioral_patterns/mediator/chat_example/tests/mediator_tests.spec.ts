import { describe, test, expect } from "vitest";
import { Application } from "../application";

describe('Mediator Chat Example', () => {
  test('Users communicate via mediator', () => {
    const out = new Application().chat();
    expect(out.a[0]).toContain('Bob:');
    expect(out.b[0]).toContain('Alice:');
  });
});


