// try catch é usado para tratar erros em tempo de execução
// O bloco try contém o código que pode gerar um erro
// O bloco catch contém o código que será executado se um erro ocorrer no bloco try
// O bloco finally contém o código que será executado independentemente de um erro ter ocorrido ou não
try {
    console.log('Início do bloco try'); // Código que pode gerar um erro  
    let resultado = 10 / 0; // Divisão por zero não gera erro em JavaScript, mas vamos simular um erro
    console.log('Resultado:', resultado);
    // Simulando um erro
    throw new Error();   
    console.log('Fim do bloco try'); // Este código não será executado se um erro ocorrer
} catch (error) {           
    console.log('Ocorreu um erro'); // Código que será executado se um erro ocorrer
} finally {
    console.log('Bloco finally executado'); // Código que será executado independentemente de um erro ter ocorrido ou não
}