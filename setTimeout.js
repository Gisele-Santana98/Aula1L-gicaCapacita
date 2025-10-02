/** 1. Crie um contador que utilize setInterval para contar de 1 até 5.*/
let contador = 1;
const intervalo = setInterval(() => {
  console.log(contador);
    
/** 2. A cada segundo, mostre o número no console. */ /** 3. Use clearInterval para parar a execução após o número 5. */
if (contador === 5) {
    clearInterval(intervalo);
  }
    contador++;
}, 1000);

/** 4. Crie também um setTimeout que exiba a mensagem ;Tempo esgotado; após 3 segundos. */
setTimeout(() => {
  console.log("⏰ Tempo esgotado!");
}, 3000);