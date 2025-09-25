// O spred operator é representado por três pontos (...)
// Ele é usado para expandir elementos iteráveis (como arrays) em locais onde zero ou mais argumentos (para chamadas de função) ou elementos (para arrays literais) são esperados.
// Também pode ser usado para espalhar as propriedades de um objeto em outro objeto.

const numeros = [1, 2, 3];
const outrosNumeros = [4, 5, 6];

const todosNumeros = [...numeros, ...outrosNumeros]; // Combina dois arrays
console.log(todosNumeros); // [1, 2, 3, 4, 5, 6]

// Exemplo com objetos
const dadosPessoais = { 
    nome: 'Ana', 
    idade: 25, 
    cidade: 'São Paulo' };
const dadosProfissionais = { 
    profissao: 'Engenheira', 
    empresa: 'TechCorp' };

const perfilCompleto = { ...dadosPessoais, ...dadosProfissionais }; // Combina dois objetos
console.log(perfilCompleto); // { nome: 'Ana', idade: 25, cidade: 'São Paulo', profissao: 'Engenheira', empresa: 'TechCorp' }