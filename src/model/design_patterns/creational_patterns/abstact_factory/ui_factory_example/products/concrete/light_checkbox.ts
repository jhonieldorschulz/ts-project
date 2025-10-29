import { CheckBox } from "../abstract_interfaces/checkbox";

export class LightCheckbox implements CheckBox {
    private theme = 'Light';
    private checked = false;
    render(): string {
        return `[${this.theme}Checkbox] ${this.checked ? 'checked' : 'unchecked'}`;
    }
    toggle(): boolean {
        this.checked = !this.checked;
        return this.checked;
    }

}