import { FSNode } from "../component/fs_node";

export class FolderNode implements FSNode {
  private readonly children: FSNode[] = [];
  constructor(public name: string) {}

  add(node: FSNode): void { this.children.push(node); }
  size(): number { return this.children.reduce((acc, n) => acc + n.size(), 0); }
}


