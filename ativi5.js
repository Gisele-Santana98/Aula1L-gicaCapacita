/**1. Declaração de variáveis com let e const */
let nome = 'João'; 
const idade = 30;

console.log(nome = 'Maria'); // Essa reatribuição é válida pois 'nome' foi declarada com let
//console.log(idade = 31); // Isso causará um erro pois 'idade' foi declarada com const, seu valor não pode ser alterado

/**2. Arrow Functions */
function somar(a, b) {
    return a + b;
}
console.log(somar(2, 3)); 

const somarArrow = (a, b) => a + b;
console.log(somarArrow(2, 3)); 

const numeroSoma = (x, y) => 158 + 258;
console.log(numeroSoma()); 

/**3. Template Literals */
let nomeCompleto = `João Silva`;
let cidade = 'São Paulo';

console.log(`Meu nome é ${nomeCompleto} e eu moro em ${cidade}.`); 

/**4. Desestruturação (Destructuring)*/
const pessoa = {
    nome: 'Ana',
    idade: 25,
    cidade: 'Rio de Janeiro'
};

const { nome: nomePessoa, idade: idadePessoa, cidade: cidadePessoa } = pessoa;

console.log(nomePessoa); 
console.log(idadePessoa); // Separando em variaveis diferentes
console.log(cidadePessoa);

console.log(nomePessoa + ', ' + idadePessoa + ', ' + cidadePessoa); // Concatenando strings

/**5. Operador Spread e Rest */
const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];

const todosNumeros1 = [...numeros1, ...numeros2]; // Irá combinar os dois arrays
console.log(todosNumeros1);

const frutas = ['maçã', 'banana', 'laranja'];
const legumes = ['cenoura', 'batata', 'alface'];

const alimentos = [...frutas, ...legumes]; // Irá combinar os dois arrays
console.log(alimentos); 
//Crie uma função que receba um número indefinido de parâmetros e use o operador rest para somar todos eles.

function somarTudo(...numeros) { // usando o parametro rest
    // numeros.reduce() é um método que itera sobre o array e acumula um valor
    return numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0); 
}
console.log(somarTudo(1, 2, 3, 4, 5));

/**6. Classes e Objetos */
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}
const pessoa1 = new Pessoa('Carlos', 28);
pessoa1.apresentar();

const pessoa2 = new Pessoa('Mariana', 22);
pessoa2.apresentar();

/**7. Módulos (import/export)*/
//Crie dois arquivos JS: um com uma função exportada e outro que importe essa função e a utilize.
// No arquivo mathUtils.js
export function multiplicar(a, b) {
    return a * b;
}
// No arquivo main.js
import { multiplicar } from './mathUtils.js';