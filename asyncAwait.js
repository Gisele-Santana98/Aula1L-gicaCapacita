/** 1. Utilize a função processarUsuario com async/await. */
async function buscarUsuario(nome) {
    return new Promise((resolve, rejeita) => {
      console.log(`🔍 Buscando usuário "${nome}" no banco de dados...`);
      setTimeout(() => {
            if (nome) {
                resolve(`Usuário "${nome}" encontrado!`);
            } else {
                rejeita("Nome de usuário não fornecido.");
            }
        }, 1000);
    });
}
/** 2. Crie uma função assíncrona chamada buscarUsuario. */
async function processarUsuario(nome) {
    return await buscarUsuario(nome);
}
/** 3. Use try/catch para capturar possíveis erros.*/
try {
    const mensagem = await processarUsuario(nome);
    console.log(mensagem);
  } catch (erro) {
    console.error(erro);
  }
/** 4. Exiba o resultado no console.*/
buscarUsuario("Ana");

