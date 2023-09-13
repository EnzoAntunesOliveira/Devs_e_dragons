import { personagem } from "./personagem.js"

export class Mago /*Herança-->*/extends personagem{ 
    elementoMagico
    levelMagico
    inteligencia
    static tipo = 'Mago'

    static descricao = 'O mago é implacável!'
 
   constructor(nome, elementoMagico, levelMagico, inteligencia) {
         /*Classe Pye-->*/super (nome)
         this.elementoMagico = elementoMagico
         this.levelMagico = levelMagico
         this.inteligencia =  inteligencia
     }

     obterinsignia(){
        if(this.levelMagico >= 5 && this.inteligencia >= 5) {
            return `Mestre do ${this.elementoMagico}`

        }
        return super.obterinsignia()
     }
 
 }