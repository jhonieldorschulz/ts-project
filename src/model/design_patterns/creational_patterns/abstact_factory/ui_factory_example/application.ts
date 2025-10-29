import { GUIFactory } from "./factory/gui_factory";
import { Button } from "./products/abstract_interfaces/button";
import { CheckBox } from "./products/abstract_interfaces/checkbox";

export class Application {
  private button: Button;
  private checkbox: CheckBox;

  constructor(factory: GUIFactory) {
    this.button = factory.createButton();
    this.checkbox = factory.createCheckBox();
  }

  renderUI(): { button: string; checkbox: string } {
    return {
      button: this.button.render(),
      checkbox: this.checkbox.render(),
    };
  }

  toggleCheckbox(): boolean {
    return this.checkbox.toggle();
  }
}