/**1. Crie um programa que peça um número de 1 a 7 e exiba o dia da semana correspondente (1 = Domingo, 2 = Segunda, etc). */
let dia = parseInt(prompt("Digite um número de 1 a 7 para saber o dia da semana:"));

switch (dia) {  
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Número inválido! Por favor, insira um número entre 1 e 7.");
        break;
}

/**2. Escreva um programa que receba uma nota de 0 a 10 e, usando switch case, exiba a classificação: 0-4 (Insuficiente), 5-6 (Regular), 7-8 (Bom), 9-1 (Ótimo). */
let nota = parseInt(prompt("Digite uma nota de 0 a 10:"));

switch (true) {
    case (nota >= 0 && nota <= 4):
        console.log("Insuficiente");
        break;
    case (nota >= 5 && nota <= 6):
        console.log("Regular");
        break;
    case (nota >= 7 && nota <= 8):
        console.log("Bom");
        break;
    case (nota >= 9 && nota <= 10):
        console.log("Ótimo");
        break;
    default:
        console.log("Nota inválida! Por favor, insira uma nota entre 0 e 10.");
        break;
}


/**3. Faça um programa que receba o nome de uma fruta e exiba uma mensagem de acordo com a fruta escolhida. (Exemplo: 'Banana' → 'Banana custa R$ 3,00 o quilo')*/
let fruta = prompt("Digite o nome de uma fruta (Banana, Maçã, Laranja, Uva):").toLowerCase();

switch (fruta) {
    case "banana":
        console.log("Banana custa R$ 3,00 o quilo");
        break;  
    case "maçã":
        console.log("Maçã custa R$ 4,00 o quilo");
        break;
    case "laranja":
        console.log("Laranja custa R$ 2,50 o quilo");
        break;  
    case "uva":
        console.log("Uva custa R$ 5,00 o quilo");
        break;  
    default:
        console.log("Fruta não disponível.");
        break;
}

/**4. Crie um programa que receba um número de 1 a 12 e informe o mês correspondente. */
let mes = parseInt(prompt("Digite um número de 1 a 12 para saber o mês correspondente:"));
switch (mes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");    
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
    default:
        console.log("Número inválido! Por favor, insira um número entre 1 e 12.");
        break;
}

/**5. Escreva um programa que simule um menu simples de lanchonete usando switch case (1 = Hambúrguer, 2 = Pizza, 3 = Refrigerante, 4 = Sair). */
let pedido = parseInt(prompt("Menu da Lanchonete:\n1 - Hambúrguer\n2 - Pizza\n3 - Refrigerante\n4 - Sair\nDigite o número do seu pedido:"));

switch (pedido) {
    case 1:
        console.log("Você pediu um Hambúrguer.");
        break;
    case 2:
        console.log("Você pediu uma Pizza.");
        break;
    case 3:
        console.log("Você pediu um Refrigerante.");
        break;
    case 4:
        console.log("Saindo do menu. Obrigado!");
        break;
    default:
        console.log("Opção inválida! Por favor, escolha uma opção do menu.");
        break;
}
