export type Font = { family: string; size: number };

export class FontFactory {
  private cache = new Map<string, Font>();
  getFont(family: string, size: number): Font {
    const key = `${family}:${size}`;
    let font = this.cache.get(key);
    if (!font) {
      font = { family, size };
      this.cache.set(key, font);
    }
    return font;
  }
  cacheSize(): number { return this.cache.size }
}


