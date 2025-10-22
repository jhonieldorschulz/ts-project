import { Pessoa } from "./model/Pessoa";

export class App {
  static main(): void {
    const jhoni = new Pessoa("Jhoni", 35);
    const maria = new Pessoa("Maria", 29);

    console.log(jhoni.falar());
    console.log(maria.falar());

    jhoni.envelhecer();
    console.log("Depois de envelhecer:", jhoni.toString());

    console.log("Jhoni == Maria ? ", jhoni.equals(maria));
  }
}

// Executa se este arquivo for chamado diretamente com ts-node
if (require.main === module) {
  App.main();
}