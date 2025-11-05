import { CSVExporter, JSONExporter } from "./template/exporter";

export class Application {
  run(): { csv: string; json: string } {
    const rows = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
    const csv = new CSVExporter().export(rows);
    const json = new JSONExporter().export(rows);
    return { csv, json };
  }
}


