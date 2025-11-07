import { Image } from "../subject/image";

export class RealImage implements Image {
  private loaded = false;
  constructor(private readonly filename: string) {}

  private loadFromDisk(): void {
    this.loaded = true;
  }

  display(): string {
    if (!this.loaded) this.loadFromDisk();
    return `Displaying ${this.filename}`;
  }
}


