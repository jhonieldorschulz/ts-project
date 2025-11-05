export interface PlayerState {
  play(): string;
  pause(): string;
}

export class PlayingState implements PlayerState {
  play(): string { return 'Already playing' }
  pause(): string { return 'Paused' }
}

export class PausedState implements PlayerState {
  play(): string { return 'Playing' }
  pause(): string { return 'Already paused' }
}


