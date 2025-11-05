export class Personagem{
    private tipo: string 
    private score_life: number
    private poderes: Array<any>

    public constructor(tipo: string, score_life: number){
        this.poderes = []
        this.tipo = tipo 
        this.score_life = score_life;
    }

    public correr(): string{
        return 'Correndo'
    }
    public andar(): void{

    }
    public lutar(): void{

    }
    public fugir(): void{

    }
}