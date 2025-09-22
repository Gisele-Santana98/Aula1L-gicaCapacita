class Character { //classe Character

    #nivel = 1 //torna o atributo nivel privado

    constructor(nivel, forca, agilidade, constituicao, peso, classe) { //construtor da classe Character
        this.#nivel = nivel ; //atributo privado 
        this.forca = forca
        this.agilidade = agilidade
        this.constituicao = constituicao //atributo publico
        this.peso = peso
        this.classe = classe
    }

    // metodos da classe Character
    atacar() { 
        console.log(`${this.classe} atacou e causou ${this.forca * this.#nivel} de dano!`)
    }
    defender() { 
        console.log(`${this.classe} defendeu e bloqueou ${this.constituicao * this.#nivel} de dano!`)
    }
    pular() { 
        console.log(`${this.classe} pulou ${this.agilidade * this.#nivel} metros!`)
     }
    adicionarItem(item) {
        console.log(`${this.classe} adicionou o item ${item.nome} ao inventário!`)
    }
}

class Item {
    constructor(nome, valor) {
        this.nome = nome
        this.valor = valor
        this.quantidade = 1
    }

    comprar() {
        console.log(`Você comprou o item ${this.nome} por ${this.valor} moedas!`)
    }
}

// herança da classe Item
class Arma extends Item { 
    constructor(nome, valor, dano) {
        super(nome, valor)
        this.dano = dano
    }

    atacar() {
        console.log(`Você atacou com a arma ${this.nome} e causou ${this.dano} de dano!`)
    }
    comprar() {
        console.log("Arma comprada!")
    }
}

// exemplo de metodo estatico
class Util {
    static calcularDano(forca, nivel) {
        return forca * nivel
    }
}

//instanciando da classe Character
const guerreiro = new Character(1, 15, 10, 12, 80, 'Guerreiro') 
const ladino = new Character(1, 12, 15, 10, 65, 'Ladino')
const arqueiro = new Character(1, 10, 15, 8, 70, 'Arqueiro') 
const mago = new Character(1, 8, 12, 10, 60, 'Mago') 

// chamando metodos
guerreiro.atacar()
ladino.pular()
mago.defender()
arqueiro.defender() 

// 80% de chance de dropar a espada longa
const droprate = 0.8 

if (Math.random() <= droprate) { // Math.random gera um numero aleatorio entre 0 e 1
    console.log("Você encontrou uma Espada Longa!")
    // instanciando a classe Arma
    const espada = new Arma('Espada Longa', 100, 25) // nome, valor, dano
    guerreiro.adicionarItem(espada) // adiciona a espada ao inventario do guerreiro
}