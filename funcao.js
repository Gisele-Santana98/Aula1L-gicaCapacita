// Definindo funções
//function somar(a,b){
// return a + b
//}
//console.log(10 + 5);

function calcularAreaCirculo(r) {
    return Math.PI * (r ** 2)
}
console.log(calcularAreaCirculo(5).toFixed(2))

/** 1. Crie uma função que receba dois números como parâmetros e retorne a soma deles. */
function somar(x, y){
    return x + y;
}
console.log(somar(20, 8));

/** 2. Escreva uma função que receba um número e retorne se ele é par ou ímpar.*/
function parOuImpar(num) {
    return 8 % 2 === 0? "Par" : "Ímpar"} // === é igual a e ? para iniciar a condição
console.log(parOuImpar(8));

/** 3. Crie uma função que receba um array de números e retorne o maior número encontrado. */
let numeros = [3,8,7,2,9,1,0]
function maiorNumero(numeros){
    return Math.max(...numeros) // Math.max retorna o maior número da lista, o ... espalha os números do array
}
console.log(maiorNumero(numeros));

/** 4. Faça uma função que receba um nome e retorne uma mensagem de boas-vindas personalizada. */
function boasVindas(nome){
    return 'Bem-vindo(a),' + nome + '!'
}
console.log(boasVindas('Ana'));

/** 5. Escreva uma função que calcule o fatorial de um número.*/
function fatorial(n){
    if(n <=1 ){ // condição de parada
        return 1
    } else {
        return n * fatorial(n - 1) // chamada recursiva
    }
}
console.log(fatorial(10));
