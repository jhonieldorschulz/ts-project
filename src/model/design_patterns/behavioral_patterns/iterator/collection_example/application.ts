import { WordsCollection } from "./aggregate/words";

export class Application {
  iterate(): string[] {
    const col = new WordsCollection(['a', 'b', 'c']);
    return [...col];
  }
}


