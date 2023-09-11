const pessoa = {
    nome: "Kauã",
    sobrenome: "Victor",
    ehEstudante: true,
    idade: 18,
    obterNomeCompleto: function() {
        return this.nome + ' ' + this.sobrenome;
    },
}

console.log(pessoa.nome)
console.log(pessoa.sobrenome)
console.log(pessoa.obterNomeCompleto())
pessoa.nome = "KAUÃ"
console.log(pessoa.obterNomeCompleto())

if(pessoa.ehEstudante) pessoa.curso = "Sistemas para Internet"

console.log(pessoa)

//acessando propriedade
console.log(pessoa.nome)
console.log(pessoa['nome'])

pessoa['nome'] = "Kauã"
console.log(pessoa.nome)

const pessoa2 = {...pessoa}
pessoa2.nome = "João"
console.log(pessoa.nome)
console.log(pessoa2.nome)

const pessoa3 = {...pessoa, curso:"SI"}
console.log(pessoa3)

//Outra forma de criar objeto
const obj = {
    "nome completo":"Kauã Victor"
}
console.log(obj['nome completo'])