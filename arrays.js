//Arrays
//let listaFilmes = ['Moana','Top Gun','Vingadores']
//console.log(listaFilmes)

//1. Crie um array com 5 nomes de colegas e exiba todos eles no console.
let listaColegas = ['Lua','Mia','Joan','Alice','Ruan']
//console.log(listaColegas);

//2. Faça um programa que percorra um array de números e exiba apenas os números pares.
let listaNumeros = [1,2,3,4,5,6,7,8,9,10]
//let numerosPares = listaNumeros.filter(function(numero){
    //return numero % 2 === 0;
//});
//console.log("numerosPares:", numerosPares );
//console.log(listaNumeros.filter((value) => value % 2 === 0));


//3. Crie um array com 10 números e calcule a soma de todos os elementos.
let numeros = [1,2,3,4,5,6,7,8,9,10]
//let soma = 0;

//for (let i = 0; i < numeros.length; i++) {
    //soma += numeros[i]; // Equivalente a soma = soma + numeros[i] 
//}
//console.log("A soma dos elementos é:", soma);

/**4. Crie um programa que peça ao usuário um nome e verifique se ele está presente em um array
de nomes*/
let nomeFrutas = ["banana", "laranja", "maçã", "manga","melancia"]
const escolhaFruta = prompt("Por favor, digite o nome de uma fruta:");

const frutaEscolhida = escolhaFruta 
console.log("A fruta é, " + frutaEscolhida + ".");

//Método includes irá verificar se o item ta na lista 
if (nomeFrutas.includes(frutaEscolhida)) {
    console.log("Acertou a fruta");
} else {
   console.log("Errou a fruta.");   
}

/** 5. Crie um programa que inverta a ordem dos elementos de um array e mostre o resultado. */
let pronomes = ["Eu", "Tu", "Ele", "Nós","Vós", "Eles"]
let invertePronomes = []

console.log();


