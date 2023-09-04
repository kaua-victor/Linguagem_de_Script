const str01 = 'string - tipo 1'
const str02 = "string - tipo 2"
const str03 = `string - tipo 3` //template literals

const citacao = 'Conforme Luiz, "Amanhã haverá Sol."'
console.log(citacao)

const soma = (a, b) => a + b
const x = 2
const y = 3
console.log('O resultado da soma de 2 + 3 é: ' + soma(2, 3))

console.log(`O resultado da soma de ${x} + ${y} é: ${soma(x, y)}`)

const objString = new String('string - tipo 4')//Não recomendado
console.log(typeof objString)
console.log(typeof citacao)

//Caractere Especial
console.log('I \u2661 Python!')
//----------- Métodos -----------//

//Tamanho da string - número de elementos
console.log('string - tipo 1'.length)

//Procura Caractere
console.log('string - tipo 1'.includes('S'.toLocaleLowerCase()))

//Caixa Alta
console.log('String - tipo 1'.toUpperCase())

//Caixa Baixa
console.log('String - tipo 1'.toLowerCase())

//Repetir string
console.log('<p></p>\n'.repeat(5))

//Checar como começa/termina a string
console.log(str01.startsWith('stRing'.toLowerCase()))
console.log(str01.endsWith('ls'))

//Pegar partes da string
console.log('Linguagem de Script'.substr(1, 13))
console.log('Linguagem de Script'.substring(1, 13))
console.log('Linguagem de Script'.substring(5))
console.log('Linguagem de Script'.substring(2, -1))
console.log('Linguagem de Script'.slice(6, 9))
console.log('1,2,3,4,5,6,7,8,9'.split(','))

//Exercício: Checar se uma palavra é palíndromo
//com for:


//com funções
const nome = 'natan'
const inversoNome = nome.split('').reverse().join('')
if(nome === inversoNome) console.log('É Palíndromo')
else console.log('Não é Palíndromo')