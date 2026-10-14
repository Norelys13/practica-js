// Funcion 3:
// crear una funcion que solicite dos arreglos numéricos, deberá
// retornar la suma de ambos arreglos siempre que tenga el mismo número
// de elementos, de los contrario, devolver array vacio []

function sumarArreglos(arreglo1 = [], arreglo2 = []){
    let resultado =[]

    if (arreglo1.length === arreglo2.length){
        arreglo1.forEach((valor, i) => {
            resultado.push(valor + arreglo2[i])
        })
    }

    return resultado
}

console.log(sumarArreglos([1,2,3], [4,5,6]))
console.log(sumarArreglos([10, 20], [1, 2]))

// Funcion 4:
// crear un funcion que solicite un número positivo y retorne todos los divisores
// de 5 desde 1 hasta el número que hayas indicado. El resultado se obtiene
// como arreglo. Ejemplo: 22 -> [1,2,11,22], ejemplo 40 -> [1,2,4,5,8,10,20,40]

function obtenerDivisores(numero = 0){
    let divisores= []
    for(let i = 1; i <= numero; i++){
        if(numero % i == 0){
            divisores.push(i)
        }
    }
    return divisores
}

//test
console.log(obtenerDivisores(9))
console.log(obtenerDivisores(12))
console.log(obtenerDivisores(22))