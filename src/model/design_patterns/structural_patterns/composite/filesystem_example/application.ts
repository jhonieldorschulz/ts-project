import { FileNode } from "./leaves/file_node";
import { FolderNode } from "./composites/folder_node";

export class Application {
  sampleTreeSize(): number {
    const root = new FolderNode('root');
    const docs = new FolderNode('docs');
    const img = new FileNode('logo.png', 1200);
    const readme = new FileNode('README.md', 800);
    docs.add(readme);
    root.add(docs);
    root.add(img);
    return root.size();
  }
}


