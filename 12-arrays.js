// Um array é uma estrutra de dados utilizada para armazenar uma coleção(lista) de valores dentro de uma ÚNICA variavel

let aluno1 = "Luis";
let aluno2 = "Muliro";
let aluno3 = "Leila";
let aluno4 = "Samuca";
let aluno5 = "Guilherme";
let aluno6 = "Clarinha";

// Organizando estrutura com arrays
// A estrutura de um array é representada por []
const alunos = ["Luis", "Muliro", "Leila", "Sacuma", "Guilherme", "Clarinha"];

console.log(alunos);

//Acessando informações de um array
console.log("--- Acessando elementos ---");
console.log(alunos[0]);
console.log(alunos[3]);


//Acessando um elemento sem valor definido
console.log(alunos[6]);


//Descobrindo o tamanho e um array
//Biel
console.log("O tamanho doarray é ", alunos.length);


//Iterando sobre um array
console.log("--- Percorrendo array - For ---");

for (let index = 0; index < alunos.length; index++) {

    const element = alunos[index];
    console.log(element);
}

console.log("--- Percorrendo array - For/of ---");
for (let aluno of alunos){
    console.log(aluno);
    
}
