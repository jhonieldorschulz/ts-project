"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const Pessoa_1 = require("./model/Pessoa");
class App {
    static main() {
        const jhoni = new Pessoa_1.Pessoa("Jhoni", 35);
        const maria = new Pessoa_1.Pessoa("Maria", 29);
        console.log(jhoni.falar());
        console.log(maria.falar());
        jhoni.envelhecer();
        console.log("Depois de envelhecer:", jhoni.toString());
        console.log("Jhoni == Maria ? ", jhoni.equals(maria));
    }
}
exports.App = App;
// Executa se este arquivo for chamado diretamente com ts-node
if (require.main === module) {
    App.main();
}
