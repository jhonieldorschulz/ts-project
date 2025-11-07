import { Circle } from "./prototype/shape";

export class Application {
  duplicateCircle(): { original: number; copy: number } {
    const c1 = new Circle(0, 0, 'red', 10);
    const c2 = c1.clone();
    return { original: c1.area(), copy: c2.area() };
  }
}


