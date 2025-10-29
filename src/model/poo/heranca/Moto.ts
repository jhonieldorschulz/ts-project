import { Veiculo } from "./Veiculo"

export class Moto extends Veiculo {
    private cilindradas: number

    constructor(marca: string, modelo: string, cilindradas: number) {
        super(marca, modelo)
        this.cilindradas = cilindradas
    }

    public empinar(): void{
        console.log(`${this.marca} ${this.modelo} está empinando`)
    }
}