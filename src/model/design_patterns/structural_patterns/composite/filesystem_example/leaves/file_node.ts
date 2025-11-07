import { FSNode } from "../component/fs_node";

export class FileNode implements FSNode {
  constructor(public name: string, private readonly bytes: number) {}
  size(): number { return this.bytes; }
}


