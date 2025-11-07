export class WordsCollection implements Iterable<string> {
  constructor(private readonly words: string[]) {}
  [Symbol.iterator](): Iterator<string> {
    let index = 0;
    const arr = this.words;
    return {
      next(): IteratorResult<string> {
        if (index < arr.length) return { value: arr[index++], done: false };
        return { value: undefined as unknown as string, done: true };
      },
    };
  }
}


