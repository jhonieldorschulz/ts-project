import { DesktopNotification } from "../products/desktop_notification";
import { Notification } from "../products/notification";
import { Toast } from "../products/toast";
import { NotificationFactory } from "./notification_factory";

export class DesktopNotificationFactory implements NotificationFactory{
    createNotification(): Notification {
        throw new DesktopNotification();
    }
    createToast(): Toast {
        throw new Error("Method not implemented.");
    }

}