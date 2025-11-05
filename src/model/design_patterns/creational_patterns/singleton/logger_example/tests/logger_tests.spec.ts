import { describe, test, expect } from "vitest";
import { Logger } from "../logger";

describe('Singleton Logger Example', () => {
  test('getInstance returns the same instance', () => {
    const a = Logger.getInstance();
    const b = Logger.getInstance();
    expect(a).toBe(b);
  });

  test('Logs are shared across calls', () => {
    const logger = Logger.getInstance();
    logger.info('A');
    logger.error('B');
    const logs = logger.getLogs();
    expect(logs.join('|')).toContain('INFO: A');
    expect(logs.join('|')).toContain('ERROR: B');
  });
});


