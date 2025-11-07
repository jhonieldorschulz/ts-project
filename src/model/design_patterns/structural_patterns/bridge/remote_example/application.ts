import { TV } from "./implementation/device";
import { AdvancedRemote } from "./abstraction/remote";

export class Application {
  demo(): { power: boolean; volume: number } {
    const tv = new TV();
    const remote = new AdvancedRemote(tv);
    remote.togglePower();
    remote.volumeUp();
    remote.mute();
    return { power: tv.isEnabled(), volume: tv.getVolume() };
  }
}


