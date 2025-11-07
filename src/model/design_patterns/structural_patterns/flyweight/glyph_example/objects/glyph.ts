import { Font } from "../flyweight/font_factory";

export class Glyph {
  constructor(public char: string, public font: Font, public x: number, public y: number) {}
  render(): string { return `${this.char}@(${this.x},${this.y})[${this.font.family}/${this.font.size}]` }
}


