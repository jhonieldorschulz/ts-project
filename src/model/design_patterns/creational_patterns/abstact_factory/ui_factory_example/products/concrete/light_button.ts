import { Button } from "../abstract_interfaces/button";

export class LightButton implements Button {

    private theme = 'Light';
    render(): string {
        return `[${this.theme}Button] rendered with light background`;
    }
    onClick(): void {
        // behavior could be more complex
        // simply log or simulate
        // (for tests we won't rely on console)
        console.log('Light button clicked')
    }

}