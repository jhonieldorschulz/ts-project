import { EmailService } from "./subsystems/email_service";
import { SmsService } from "./subsystems/sms_service";
import { PushService } from "./subsystems/push_service";

export class NotificationFacade {
  private email = new EmailService();
  private sms = new SmsService();
  private push = new PushService();

  sendWelcome(user: { email: string; phone: string; deviceId: string }): string[] {
    return [
      this.email.send(user.email, 'Welcome', 'Hello!'),
      this.sms.send(user.phone, 'Welcome!'),
      this.push.send(user.deviceId, 'Welcome', 'Hello!'),
    ];
  }
}


