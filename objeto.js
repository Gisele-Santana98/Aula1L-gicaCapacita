//Objetos - Poo
/** 1. Crie um objeto que represente uma pessoa com as propriedades: nome, idade e profissão. Exiba
as informações no console. */
let pessoa = {
    nome: 'Luana',
    idade: 17,
    profissao: 'Estudante'
}
console.log(pessoa);

/** 2. Faça um objeto que represente um carro (modelo, ano, cor) e crie um método que exiba uma
frase com essas informações. */
let car = {
    modelo: 'Fiat Strada',
    ano: 2020,
    cor: 'Prata'
}
console.log('O meu carro é do modelo:', car.modelo,',','ano', car.ano,'e de cor', car.cor,'.' );
        
/** 3. Crie um array de objetos representando alunos (nome e nota). Exiba apenas os alunos com nota
maior ou igual a 7. */
let aluno =[ // Array de objetos
    {nome: 'Luana', nota: 8},
    {nome: 'Ruan', nota: 5},
    {nome: 'Lua', nota: 6},
    {nome: 'Enzo', nota: 9}
];

let aprovados = aluno.filter(a => a.nota >= 7) // Criando parâmetro para filtrar alunos com nota maior ou igual a 7
if (aprovados.length > 0) { // Verifico se há alunos aprovados
    //console.log('Alunos aprovados:', aprovados.map(a => a.nome).join(', ')); //.map para pegar apenas os nomes e .join para separar por vírgula
} else {
    console.log('Nenhum aluno aprovado');
}

/** 4. Escreva um programa que adicione uma nova propriedade 'endereço' a um objeto existente. */
let pessoaNova = {
    nome: 'Carlos',
    idade: 30,
    profissao: 'Engenheiro'
};
pessoaNova.endereco = 'Rua das Amoras, 123, Salvador'; // Adicionando nova propriedade 'endereço'
console.log(pessoaNova);

/** 5. Crie um objeto que represente um produto (nome, preço, quantidade). Escreva uma função que
calcule o valor total em estoque (preço × quantidade). */
let produto = {
    nome: 'Notebook',
    preco: 3500,
    quantidade: 4
};

function valorTotalEmEstoque(produto) {
    return produto.preco * produto.quantidade;
}
console.log('Valor total em estoque:', valorTotalEmEstoque(produto));
