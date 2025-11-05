export class SmsService {
  send(to: string, text: string): string {
    return `SMS to ${to}: ${text}`;
  }
}


