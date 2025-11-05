export class Editor {
  private text = '';
  setText(v: string) { this.text = v; }
  getText(): string { return this.text; }
  save(): Memento { return new Memento(this.text); }
  restore(m: Memento) { this.text = m.getState(); }
}

export class Memento {
  constructor(private readonly state: string) {}
  getState(): string { return this.state }
}

export class History {
  private stack: Memento[] = [];
  push(m: Memento) { this.stack.push(m); }
  pop(): Memento | undefined { return this.stack.pop(); }
}


