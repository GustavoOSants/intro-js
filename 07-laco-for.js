// laços de repetição (loops) são estruturas que nos permitem executar um bloco de código várias vezes sem precisar escrever o mesmo código repetidamente.

// laço for
//

/* 
estrutura de uma laço for
for(inicialização; condição; incremento){
bloco de código que será executado}
 */

for (let inicio = 0; inicio >= 10; inicio++) {
    console.log("Olá!");
}
//
for (let index = 1; index <= 20; index++) {
    console.log(index);
}
//Exemplo básico de atualização de variável
for (let i = 1; i <= 20; i += 6) {
    console.log(i);
}


// Exemplo com tabuada
for (let i = 1; i <= 10; i++) {
    console.log(` 6 x ${i} = ${6 * i}`)

}

//Exemplo avançado de tabuada
const numeroTabuada = prompt("Digite um número da tabuada que deseja ver:");

console.log(numeroTabuada);


for (let inicio = 1; inicio <= 10; inicio++) {
    const resultadoTabuada = numeroTabuada * inicio;
    const mensagemTabuada = `${numeroTabuada} X ${inicio} = ${resultadoTabuada}`
    console.log(mensagemTabuada);
}