import { ChatMediator } from "./mediator/chat_mediator";
import { User } from "./components/user";

export class Application {
  chat(): { a: string[]; b: string[] } {
    const mediator = new ChatMediator();
    const a = new User('Alice', mediator);
    const b = new User('Bob', mediator);
    mediator.register(a.name, a.receive.bind(a));
    mediator.register(b.name, b.receive.bind(b));
    a.send('Hi');
    b.send('Hello');
    return { a: a.inbox, b: b.inbox };
  }
}


