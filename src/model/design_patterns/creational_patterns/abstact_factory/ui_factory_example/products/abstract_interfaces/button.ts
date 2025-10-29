import { Component } from "./component";

export interface Button extends Component{
    render(): string;
    onClick(): void;
}