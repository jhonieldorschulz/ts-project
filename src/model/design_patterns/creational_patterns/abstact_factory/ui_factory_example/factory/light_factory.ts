import { Button } from "../products/abstract_interfaces/button";
import { CheckBox } from "../products/abstract_interfaces/checkbox";
import { LightButton } from "../products/concrete/light_button";
import { LightCheckbox } from "../products/concrete/light_checkbox";
import { GUIFactory } from "./gui_factory";

export class LightFactory implements GUIFactory{
    public createButton(): Button {
        return new LightButton();
    }

    public createCheckBox(): CheckBox {
        return new LightCheckbox();
    }
}