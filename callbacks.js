/** 1. Crie uma função chamada processarUsuario que recebe o nome de um usuário e um callback. */
function saudacao(nome) {
  console.log(`👋 Olá, ${nome}! Seja bem-vindo.`);
}

/** 2. A função deve simular uma busca em banco de dados usando setTimeout (2 segundos).*/
function processarUsuario(nome, callback) {
  console.log(`🔍 Buscando usuário "${nome}" no banco de dados...`);

  setTimeout(() => {
    console.log(`✅ Usuário "${nome}" encontrado!`);
    callback(nome);
  }, 2000); // 2 segundos de simulação
}

/** 3. Após o tempo, chame o callback exibindo no console: &#39;Usuário encontrado: [nome];.*/
function exibirMensagem(nome) {
  console.log(`👋 Olá, ${nome}! Seja bem-vindo.`);
}

processarUsuario("Mariana", exibirMensagem);
/** 4. Teste a função chamando-a com o nome de um usuário e um callback que mostre a mensagem. */
function processarUsuario(nome, callback) {
  console.log(`🔍 Buscando usuário "${nome}" no banco de dados...`);

  setTimeout(() => {
    console.log(`✅ Usuário "${nome}" encontrado!`);
    callback(nome);
  }, 2000); // Simula 2 segundos de busca
}

// Callback que mostra uma mensagem de boas-vindas
function mostrarMensagem(nome) {
  console.log(`👋 Olá, ${nome}! Seja muito bem-vindo.`);
}

// Teste da função
processarUsuario("Carlos", mostrarMensagem);