import { Player } from "./context/player";

export class Application {
  demo(): string[] {
    const p = new Player();
    return [p.play(), p.play(), p.pause(), p.pause()];
  }
}


