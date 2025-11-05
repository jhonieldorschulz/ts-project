export class PushService {
  send(deviceId: string, title: string, message: string): string {
    return `PUSH to ${deviceId}: ${title}`;
  }
}


