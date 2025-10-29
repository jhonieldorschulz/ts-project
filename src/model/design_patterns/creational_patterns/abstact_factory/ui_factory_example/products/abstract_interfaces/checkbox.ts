import { Component } from "./component";

export interface CheckBox extends Component{ 
    toggle(): boolean
}