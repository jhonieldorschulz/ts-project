export interface Visitor {
  visitNumber(node: NumberNode): number;
  visitAdd(node: AddNode): number;
}

export interface Node { accept(v: Visitor): number }

export class NumberNode implements Node {
  constructor(public value: number) {}
  accept(v: Visitor): number { return v.visitNumber(this) }
}

export class AddNode implements Node {
  constructor(public left: Node, public right: Node) {}
  accept(v: Visitor): number { return v.visitAdd(this) }
}

export class EvalVisitor implements Visitor {
  visitNumber(node: NumberNode): number { return node.value }
  visitAdd(node: AddNode): number { return node.left.accept(this) + node.right.accept(this) }
}


