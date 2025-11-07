import { Editor, History } from "./originator/editor";

export class Application {
  flow(): string[] {
    const editor = new Editor();
    const history = new History();
    editor.setText('v1'); history.push(editor.save());
    editor.setText('v2'); history.push(editor.save());
    editor.setText('v3');
    const out = [editor.getText()];
    const m2 = history.pop(); if (m2) editor.restore(m2);
    const m1 = history.pop(); if (m1) editor.restore(m1);
    out.push(editor.getText());
    return out;
  }
}


