import { Editor } from "./receiver/editor";
import { SetTextCommand } from "./command/command";
import { CommandHistory } from "./invoker/history";

export class Application {
  run(): string[] {
    const editor = new Editor();
    const history = new CommandHistory();

    const setHello = new SetTextCommand(editor, 'Hello');
    setHello.execute();
    history.push(setHello);

    const setWorld = new SetTextCommand(editor, 'World');
    setWorld.execute();
    history.push(setWorld);

    const output: string[] = [editor.getText()];
    const last = history.pop();
    last?.undo();
    output.push(editor.getText());
    return output;
  }
}


