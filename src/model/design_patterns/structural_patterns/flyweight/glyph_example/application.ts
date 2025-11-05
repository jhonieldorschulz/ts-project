import { FontFactory } from "./flyweight/font_factory";
import { Glyph } from "./objects/glyph";

export class Application {
  renderWord(word: string): { rendered: string[]; fonts: number } {
    const factory = new FontFactory();
    const font = factory.getFont('Arial', 12);
    const out = [...word].map((c, i) => new Glyph(c, font, i, 0).render());
    return { rendered: out, fonts: factory.cacheSize() };
  }
}


