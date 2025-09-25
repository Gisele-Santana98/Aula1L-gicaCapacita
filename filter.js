// Filter é um método de array que cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
// Ele não modifica o array original, mas retorna um novo array com os elementos que satisfazem a condição.
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

const caro = produto => produto.preco >= 500; // Função que verifica se o preço é maior ou igual a 500
const fragil = produto => produto.fragil; // Função que verifica se o produto é frágil
const resultado = produtos.filter(caro).filter(fragil); // Filtra os produtos caros e frágeis
console.log(resultado); // Exibe o resultado no console
// Saída esperada: [ { nome: 'iPad Pro', preco: 4199, fragil: true } ]