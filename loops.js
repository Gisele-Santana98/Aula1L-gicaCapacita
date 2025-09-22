/**1. Escreva um programa que peça ao usuário um número e verifique se ele é positivo, negativo ou zero.*/
let numero = parseFloat(prompt("Digite um número:"));

if (numero > 0) {
    console.log("O número é positivo.");
}
else if (numero < 0) {
    console.log("O número é negativo.");
}
else {
    console.log("O número é zero.");
}

/**2. Crie um programa que peça a idade de uma pessoa e informe se ela é criança (0-12), adolescente (13-17), adulto (18-59) ou idoso (60+).*/
let idade = parseInt(prompt("Digite sua idade:"));
if (idade >= 0 && idade <= 12) {
    console.log("Você é uma criança.");
}
else if (idade >= 13 && idade <= 17) {
    console.log("Você é um adolescente.");
}   
else if (idade >= 18 && idade <= 59) {
    console.log("Você é um adulto.");
}
else if (idade >= 60) {
    console.log("Você é um idoso.");
}   
else {
    console.log("Idade inválida.");
}

/**3. Faça um programa que peça um número e exiba a tabuada desse número de 1 a 10 utilizando um loop.*/
let num = parseInt(prompt("Digite um número para ver a tabuada:"));
console.log(`Tabuada do ${num}:`);  
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}

/**4. Escreva um programa que mostre todos os números pares de 1 até 50 usando um loop for.*/
console.log("Números pares de 1 a 50:");
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


/**5. Crie um programa que peça um número ao usuário e calcule a soma de todos os números de 1 até esse número usando while.*/
let numeroSoma = parseInt(prompt("Digite um número para calcular a soma de 1 até esse número:"));
let soma = 0;
let contador = 1;
while (contador <= numeroSoma) {
    soma += contador;   
    contador++;
}
console.log(`A soma de todos os números de 1 até ${numeroSoma} é ${soma}.`);
