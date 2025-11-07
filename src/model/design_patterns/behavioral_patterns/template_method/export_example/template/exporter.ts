export abstract class DataExporter {
  export(data: unknown[]): string {
    const normalized = this.normalize(data);
    const formatted = this.format(normalized);
    return this.wrap(formatted);
  }

  protected normalize(data: unknown[]): Record<string, unknown>[] {
    return data as Record<string, unknown>[];
  }

  protected abstract format(rows: Record<string, unknown>[]): string;
  protected wrap(out: string): string { return out; }
}

export class CSVExporter extends DataExporter {
  protected format(rows: Record<string, unknown>[]): string {
    if (rows.length === 0) return '';
    const headers = Object.keys(rows[0]);
    const lines = [headers.join(',')];
    for (const r of rows) {
      lines.push(headers.map(h => String(r[h] ?? '')).join(','));
    }
    return lines.join('\n');
  }
}

export class JSONExporter extends DataExporter {
  protected format(rows: Record<string, unknown>[]): string {
    return JSON.stringify(rows);
  }
  protected wrap(out: string): string { return `JSON:${out}`; }
}


