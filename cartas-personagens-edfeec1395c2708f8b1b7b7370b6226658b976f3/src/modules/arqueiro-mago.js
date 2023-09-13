import { Arqueiro } from "./arqueiro.js";
import { Mago } from "./mago,";
import { personagem } from "./personagem.js";

export class ArqueiroMago extends personagem {
    ladoArqueiro
    ladoMago
    static tipo = 'ArqueiroMago'

    static descricao ='Detentor de lancas e flechas mágicas!'

    constructor(nome, destreza, elementoMagico, levelMagico, inteligencia){
    super(nome)
    this.ladoArqueiro = new Arqueiro (nome, destreza)
    this.ladoMago = new Mago (nome, elementoMagico, levelMagico, inteligencia)
    }
    obterinsignia(){
        return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterinsignia()}`
    }
}
