//Array é coleção de objetos

// const array = [1, 2, '3'];
const array = [5, '2'];
//Array modificado
array[0] = 10

//Outra forma de criar Array
// const objArray = new Array(5)
// console.log(objArray[0])

//Concatena número e string
console.log(array[0] + array[1])

//Operação matemática
console.log(array[0] - array[1])

console.log(array[0] + Number(array[1]))

//Add num na última pos.
array.push(15)
console.log(array)

//Deleta a última pos. do array
array.pop()
console.log(array)

//Deleta a primeira pos. do array
// array.shift()
// console.log(array)

//Add um elemento no primeiro elemento
array.unshift(100)
console.log(array)

//Inserir em qualquer posição
array.splice(1, 0, 5)
console.log(array)


console.log(array.slice(1,2))
console.log(array.slice(1))
console.log(array.slice(1,-1))
console.log(array.slice(-1,1)) //não funciona

//Revertendo array
console.log(array.reverse())

//Transformando 2 arrays em 1 só
const x = [1, 2, 3, [5, 6, 7]]
console.log(x.flat())

//Concatenando arrays
console.log(array.concat([1, 2]))

//Concatenando arrays com desestruturação
console.log([...array,1 ,2])
const array2 = [1, 2]
console.log([...array,...array2])


const array1 = [5, 6, 7, 8]
const [a, b, c, d] = array1
console.log(c)

//Percorrendo array
for(let i = 0; i < array.length; i++) {
    console.log(array[i] * 2)
}

for(const elemento of array) {
    console.log(elemento * 2)
}

for(const indice in array) {
    console.log(array[indice] * 2)
}

//Ordenando

const ordenacao = (a, b) => a - b;
const arrayNaoOrdenado = [4, 1, 8, 3, 50, 70] 
console.log(arrayNaoOrdenado.sort(ordenacao))