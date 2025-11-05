import { describe, test, expect } from "vitest";
import { FileNode } from "../leaves/file_node";
import { FolderNode } from "../composites/folder_node";

describe('Composite FS Example', () => {
  test('Folder size aggregates children', () => {
    const root = new FolderNode('root');
    root.add(new FileNode('a.txt', 100));
    const sub = new FolderNode('sub');
    sub.add(new FileNode('b.bin', 300));
    root.add(sub);
    expect(root.size()).toBe(400);
  });
});


