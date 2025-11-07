import { Command } from "../command/command";

export class CommandHistory {
  private stack: Command[] = [];
  push(c: Command) { this.stack.push(c); }
  pop(): Command | undefined { return this.stack.pop(); }
}


