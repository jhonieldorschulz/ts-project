import { PlayerState, PlayingState, PausedState } from "../state/player_state";

export class Player {
  private state: PlayerState = new PausedState();
  play(): string {
    const res = this.state.play();
    if (res === 'Playing') this.state = new PlayingState();
    return res;
  }
  pause(): string {
    const res = this.state.pause();
    if (res === 'Paused') this.state = new PausedState();
    return res;
  }
}


