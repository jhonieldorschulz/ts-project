export interface Transport {
  load(weightKg: number): void;
  deliver(): string;
}


