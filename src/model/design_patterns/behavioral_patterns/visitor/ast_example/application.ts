import { AddNode, EvalVisitor, NumberNode } from "./visitor/visitor";

export class Application {
  eval(): number {
    const ast = new AddNode(new NumberNode(2), new AddNode(new NumberNode(3), new NumberNode(4)));
    return ast.accept(new EvalVisitor());
  }
}


