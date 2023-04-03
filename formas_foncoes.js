// formas de escrever funçoes

// declaração fonção
function imprimir(texto){
    console.log(texto)


}

imprimir("Programação")
console.log("-----------------")
imprimir("javascript")
console.log("-----------------")

// declaração de função com passagem de parâmetros
function soma(a,b){
    return a+b
}

console.log(soma(3,4))
console.log(soma(7,8.5))
console.log("-----------------")

function multiplica(num1=3,num2=5){
    return num1*num2
}

console.log(multiplica(5,5))
console.log("-----------------")
console.log(multiplica())
console.log("-----------------")
console.log(multiplica(2))
console.log("-----------------")

//função anônima e arrow function com passagem de parâmetros
const resultado = (num1,num2) =>{
    return num1 / num2
}

console.log(resultado(8,4))
console.log("-----------------")

//função anônima e arrow function com passagem de parâmetros
const texto2 = nome =>`O nome é ${nome}`// o uso da crase é chamado de template strings

console.log(texto2("Murillo"))









