import { Image } from "../subject/image";
import { RealImage } from "../real/real_image";

export class ImageProxy implements Image {
  private real: RealImage | null = null;
  constructor(private readonly filename: string) {}

  display(): string {
    if (!this.real) {
      this.real = new RealImage(this.filename);
    }
    return this.real.display();
  }
}


