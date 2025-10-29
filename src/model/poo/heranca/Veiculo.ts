export abstract class Veiculo {
    protected marca: string
    protected modelo: string

    constructor(marca: string, modelo: string) {
        // if (new.target === Veiculo) {
        //     throw new Error("Classe abstrata 'Veiculo' não pode ser instanciada diretamente!");
        // }

        this.marca = marca;
        this.modelo = modelo;
    }


    public acelerar(): void {
        console.log(
            `${this.marca} ${this.modelo} acelerando..`
        )
    }

    public frear(): void {
        console.log(
            `${this.marca} ${this.modelo} freando...`
        )
    }



}