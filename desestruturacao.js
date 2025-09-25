// A desestruturação de objetos e arrays permite extrair valores de forma mais concisa.
// Template literals facilitam a criação de strings com variáveis embutidas.
const pessoa = {
    nome: 'João',
    idade: 30,
    profissao: 'Desenvolvedor'
}

let { nome, idade, profissao } = pessoa; // Desestruturação de objeto

console.log(nome + ' tem ' + idade + ' anos e é ' + profissao); // Concatenando strings
console.log(`${nome} tem ${idade} anos e é ${profissao}`); // Template literals


// Desestruturação de arrays serve para extrair valores de arrays.
const numeros = [1, 2, 3, 4, 5];
let [primeiro, segundo, ...resto] = numeros; // Na desestruturação de array, ela pode ter outros nomes

console.log(primeiro + ', ' + segundo); // Concatenando strings
console.log(`${primeiro}, ${segundo}`); // Template literals
console.log(resto); // [3, 4, 5]