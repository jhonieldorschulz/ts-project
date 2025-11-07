export interface Context { [name: string]: boolean }

export interface Expr { eval(ctx: Context): boolean }

export class Var implements Expr {
  constructor(public name: string) {}
  eval(ctx: Context): boolean { return !!ctx[this.name] }
}

export class And implements Expr {
  constructor(public left: Expr, public right: Expr) {}
  eval(ctx: Context): boolean { return this.left.eval(ctx) && this.right.eval(ctx) }
}

export class Or implements Expr {
  constructor(public left: Expr, public right: Expr) {}
  eval(ctx: Context): boolean { return this.left.eval(ctx) || this.right.eval(ctx) }
}

export class Not implements Expr {
  constructor(public expr: Expr) {}
  eval(ctx: Context): boolean { return !this.expr.eval(ctx) }
}


