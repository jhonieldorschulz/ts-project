import { describe, test, expect } from "vitest";
import { Application } from "../application";
import { LightFactory } from "../factory/light_factory";

describe('UI Abstract Factory Example ', () => {
    test('Application renders Light UI when given LightFactory', () => {
        const app = new Application(new LightFactory());
        const ui = app.renderUI();
        expect(ui.button).toContain('[LightButton]');
        expect(ui.checkbox).toContain('[LightCheckbox]');
    });
})