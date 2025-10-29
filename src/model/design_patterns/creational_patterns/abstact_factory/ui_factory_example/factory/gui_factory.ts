import { Button } from "../products/abstract_interfaces/button";
import { CheckBox } from "../products/abstract_interfaces/checkbox";

export interface GUIFactory{
    createButton(): Button
    createCheckBox(): CheckBox
}