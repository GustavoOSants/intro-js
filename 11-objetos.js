//Os objetos são uma estrutura de dados que nos permitem armazenar várias informações relacionadas dentro de uma ÚNICA váriavel

/* 
    estrutura de um objeto
    const objeto = {
        key: value,
        chave: valor,
        propriedade: valor,
        outraPropriedade: outroValor
    }
*/

//Exemplo: Criando informações de um aluno
let nome = "Samuca";
let idade = 19;
let curso = "JavaScript";
let email = "samuca@gameplay.com";
let matriculado = true;

//Organizando estrutura com objetos
const aluno = {
    nome: "Samuca",
    idade: 19,
    curso: "JavaScript",
    email: "samuca@gameplay.com",
    matriculado: true
}

//Exibindo o objeto completo
console.log("--- OBJETO COMPLETO ---");
console.log(aluno);

//Acessando informações especificas
// com o ponto final . - (dot notation)
console.log("--- ACESSANDO COM . ---");
console.log(aluno.nome);
console.log(aluno.email);

//com o colchete [] - (bracket notation)
console.log("--- ACESSANDO COM [] ---");
console.log(aluno["curso"]);
console.log(aluno["idade"]);

// ALterando informações de um objeto
console.log("--- ALTERANDO PROPRIEDADES ---");
aluno.curso = "React";
console.log(aluno);


//Adicionando propriedades ao objeto
console.log("--- ADICIONANDO PROPRIEDADES ---");
aluno.nota = 9.5;
console.log(aluno);

console.log("--- REMOVENDO PROPRIEDADES ---");
delete aluno.nota

console.log(aluno);


// Objetos aninhados (Objeto dentro de objeto)
console.log("--- objetos aninhados ---");

const pessoa = {
    nome: "Alex",
    sobrenome: "Furukawa",
    idade: 18,

    endereco: {
        bairro: "Carrão",
        estado: "SP",
        cidade: "São Paulo",
        cep: "01000-000",
        numero: 67,
        rua: "Logo ali",
        coordinates: {
            lat: "-0192831082309",
            long: "-1928301823"
        }
    }
}

console.log(pessoa.endereco.cep);
console.log(pessoa.endereco.coordinates.long);


// Objetos com funções(métodos)
const cachorro = {
    nome: "Renato",
    idade: 3,
    raça: "Husky Siberiano",

    // Método
    latir: function () {
        console.log("Au Au")
    }
}

cachorro.latir();

// Exemplos comuns
const produto = {
    tela: "Amoled 16pol",
    armazenamento: "SSD 1TB",
    Processador: "Ryzen 5500U",
    memoriaRam: "16GB",
    bateria: "",
    preco: 3500,
    estoque: 10,
    disponivel: true,
}

const clima = {
    cidade: "São Paulo",
    temperatura: 24.998786786877,
    umidade: 70,
    vento: 13,
}

console.log(`Temperatura: ${clima.temperatura.toFixed(2)}C`);

// Mostrando apenas as chaves do objeto
console.log(Object.keys(clima));

//Mostrando apenas os valores do objeto
console.log(Object.values(clima));

// Retornando pares de chave e valor
console.log(Object.entries(clima));

//Iterando sobre um objeto
//Acessando chaves
for (const key in produto) {
    console.log(key);
}

//Acessando valores
for (const banana in produto) {
    const element = produto[banana];
    
    console.log(element);
    
}



