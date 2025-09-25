
// Exemplo básico de uso do método map em JavaScript
// O método map cria um novo array com os resultados da chamada de uma função para cada elemento do array original.
// Usando a Callback Function (função de retorno de chamada) para processar cada elemento do array.
const listaNumeros = [1, 2, 3, 4, 5];

listaNumeros.map((numero) => { 
    console.log(numero);
})

// Exemplo com array de objetos
const pessoas = [
    { nome: 'Carlos', idade: 28 },
    { nome: 'Ana', idade: 22 },
    { nome: 'Pedro', idade: 35 }
];
pessoas.map((pessoa) => {
    console.log(`${pessoa.nome} tem ${pessoa.idade} anos.`);
})

// Exemplo com array de strings
const frutas = ['Maçã', 'Banana', 'Laranja'];
frutas.map((fruta) => {
    console.log(`Eu gosto de ${fruta}`);
})