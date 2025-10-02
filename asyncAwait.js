/** 1. Utilize a função processarUsuario com async/await. */
/** 2. Crie uma função assíncrona chamada buscarUsuario. */
/** 3. Use try/catch para capturar possíveis erros.*/
/** 4. Exiba o resultado no console.*/
async function buscarUsuario(nome) {
  try {
    const mensagem = await processarUsuario(nome);
    console.log(mensagem);
  } catch (erro) {
    console.error(erro);
  }
}

// Teste com nome válido
buscarUsuario("Ana");


