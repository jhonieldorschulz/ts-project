import { Editor } from "../receiver/editor";

export interface Command {
  execute(): void;
  undo(): void;
}

export class SetTextCommand implements Command {
  private prev = '';
  constructor(private readonly editor: Editor, private readonly next: string) {}
  execute(): void { this.prev = this.editor.getText(); this.editor.setText(this.next); }
  undo(): void { this.editor.setText(this.prev); }
}


