import { Notification } from "../products/notification";
export class DesktopNotification implements Notification{
    
    constructor(){

    }

    show(): string {
       return 'Renderizando Desktop Notification'
    }
    dismiss(): void {
        console.log('Desktop notification dismissed')
    }
    
}