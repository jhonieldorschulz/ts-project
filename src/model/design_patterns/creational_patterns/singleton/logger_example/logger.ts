export class Logger {
  private static instance: Logger | null = null;
  private logs: string[] = [];

  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  info(message: string): void {
    this.logs.push(`INFO: ${message}`);
  }

  error(message: string): void {
    this.logs.push(`ERROR: ${message}`);
  }

  getLogs(): string[] {
    return [...this.logs];
  }
}


