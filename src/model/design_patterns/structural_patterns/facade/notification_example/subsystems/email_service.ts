export class EmailService {
  send(to: string, subject: string, body: string): string {
    return `Email to ${to}: ${subject}`;
  }
}


