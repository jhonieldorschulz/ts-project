export class ContaBancaria{
    private saldo : number  
    private numero: string 

    constructor(saldo: number, numero: string){
        this.saldo = saldo
        this.numero = numero 
    }

     public depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
        }
    }

    public sacar(valor: number): boolean {
        if (valor > 0 && this.saldo >= valor) {
            this.saldo -= valor;
            return true;
        }
        return false;
    }

    public getSaldo(): number {
        return this.saldo;
    }

}