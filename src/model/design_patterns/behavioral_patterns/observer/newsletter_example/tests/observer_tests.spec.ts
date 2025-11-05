import { describe, test, expect } from "vitest";
import { Newsletter } from "../subject/newsletter";
import { UserObserver } from "../observers/user_observer";

describe('Observer Newsletter Example', () => {
  test('Observers receive notifications', () => {
    const news = new Newsletter();
    const a = new UserObserver('Alice');
    const b = new UserObserver('Bob');
    news.subscribe(a);
    news.subscribe(b);
    news.publish('Nova edição!');
    expect(a.inbox[0]).toContain('Nova edição!');
    expect(b.inbox[0]).toContain('Nova edição!');
  });

  test('Unsubscribe stops notifications', () => {
    const news = new Newsletter();
    const a = new UserObserver('Alice');
    news.subscribe(a);
    news.publish('#1');
    news.unsubscribe(a);
    news.publish('#2');
    expect(a.inbox.length).toBe(1);
  });
});


