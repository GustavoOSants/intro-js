// Variaveis - Uma variavel nada mais é do que um identificador que permite acessar um valor armazanado durante a execução do código.

//Exemplo: Imagine uma caixa etiquetada - A etiqueta é o nome da variavel, e o conteúdo é o valor atual que armazena/representa

//let etiqueta = valor
let nome = "Gugas";


// O JavaScript possui três formas de declarar variaveis

// 1 - const
const pais = "Brasil";
console.log(pais);

//Com a declaração, não é possivel reatribuir novos valores para uma variavel. Descomente a linha abaixo para ver o erro no console.

//pais = "Portugal";

//2 - let
let idade = 20;
console.log(idade);

//Redeclarando o valor da variavel
idade = 23;
console.log(idade);

//Redeclarando o valor da variavel
idade = 40;
console.log(idade);

//3 - var (não recomendado)
var cidade = "São Paulo"
console.log(cidade)

//Reatribuindo o valor da variavel
cidade = "Santos"
console.log(cidade)