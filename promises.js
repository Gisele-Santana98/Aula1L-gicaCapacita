/** 1. Recrie a função processarUsuario usando Promises.*/
function processarUsuario(nome) {
  return new Promise((resolve, rejeita) => {
    console.log(`🔍 Buscando usuário "${nome}" no banco de dados...`);

    setTimeout(() => {
/** 2. Se o nome do usuário for diferente de vazio, resolva a Promise com a mensagem ;Usuário encontrado;. */
if (nome) {
        console.log(`✅ Usuário "${nome}" encontrado!`);
        resolve(`Usuário encontrado: ${nome}`);
      }
/** 3. Caso contrário, rejeite a Promise com a mensagem ;Usuário não encontrado;. */
else {
        rejeita("❌ Usuário não encontrado");
      }
    }, 2000); // Simula 2 segundos de busca
  });
}
/** 4. Teste a função usando .then() e .catch(). */
processarUsuario("Fernanda")
  .then((mensagem) => {
    console.log(mensagem);
  })
  .catch((erro) => {
    console.error(erro);
  });

// Teste com nome vazio
processarUsuario("")
  .then((mensagem) => {
    console.log(mensagem);
  })
  .catch((erro) => {
    console.error(erro);
  });
