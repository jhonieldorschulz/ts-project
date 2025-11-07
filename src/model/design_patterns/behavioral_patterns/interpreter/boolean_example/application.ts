import { And, Context, Not, Or, Var } from "./interpreter/expression";

export class Application {
  eval(): boolean {
    // (A && B) || !C
    const expr = new Or(new And(new Var('A'), new Var('B')), new Not(new Var('C')));
    const ctx: Context = { A: true, B: false, C: false };
    return expr.eval(ctx);
  }
}


