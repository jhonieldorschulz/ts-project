import { ImageProxy } from "./proxy/image_proxy";

export class Application {
  preview(filename: string): string {
    const img = new ImageProxy(filename);
    return img.display();
  }
}


