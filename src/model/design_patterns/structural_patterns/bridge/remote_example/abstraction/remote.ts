import { Device } from "../implementation/device";

export class Remote {
  constructor(protected device: Device) {}
  togglePower(): void { this.device.isEnabled() ? this.device.disable() : this.device.enable() }
  volumeUp(): void { this.device.setVolume(this.device.getVolume() + 10) }
  volumeDown(): void { this.device.setVolume(this.device.getVolume() - 10) }
}

export class AdvancedRemote extends Remote {
  mute(): void { this.device.setVolume(0) }
}


