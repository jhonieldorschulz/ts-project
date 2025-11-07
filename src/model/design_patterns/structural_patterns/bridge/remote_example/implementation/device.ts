export interface Device {
  isEnabled(): boolean;
  enable(): void;
  disable(): void;
  getVolume(): number;
  setVolume(v: number): void;
}

export class TV implements Device {
  private enabled = false;
  private volume = 10;
  isEnabled(): boolean { return this.enabled }
  enable(): void { this.enabled = true }
  disable(): void { this.enabled = false }
  getVolume(): number { return this.volume }
  setVolume(v: number): void { this.volume = Math.max(0, Math.min(100, v)) }
}


