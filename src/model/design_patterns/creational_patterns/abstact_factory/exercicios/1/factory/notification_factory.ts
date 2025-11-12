import { Toast } from "../products/toast"
import { Notification } from "../products/notification"

export interface NotificationFactory{
    createNotification(): Notification
    createToast(): Toast
}