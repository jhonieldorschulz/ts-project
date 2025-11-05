export interface Prototype<T> { clone(): T }

export abstract class Shape implements Prototype<Shape> {
  constructor(public x: number, public y: number, public color: string) {}
  abstract area(): number;
  abstract clone(): Shape;
}

export class Circle extends Shape {
  constructor(x: number, y: number, color: string, public radius: number) {
    super(x, y, color);
  }
  area(): number { return Math.PI * this.radius * this.radius }
  clone(): Circle { return new Circle(this.x, this.y, this.color, this.radius) }
}


