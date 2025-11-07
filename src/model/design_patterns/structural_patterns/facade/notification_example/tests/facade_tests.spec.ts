import { describe, test, expect } from "vitest";
import { NotificationFacade } from "../notification_facade";

describe('Facade Notification Example', () => {
  test('Facade aggregates subsystem calls', () => {
    const facade = new NotificationFacade();
    const res = facade.sendWelcome({ email: 'a@b.com', phone: '5599', deviceId: 'dev1' });
    expect(res.length).toBe(3);
    expect(res[0]).toContain('Email');
  });
});


