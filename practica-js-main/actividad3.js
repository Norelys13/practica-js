// Funcion 1:
// crear una funcion que reciba un arreglo de números y retorne como resultado
// un objeto indicandonos cuantos valores son pares e impares
function contarParesImpares(numeros = []){
    let pares = 0
    let impares = 0

    numeros.forEach(numero => {
        numero % 2 === 0 ? pares++ : impares++
    });
    
    return {pares: pares, impares: impares}
}

//test, demostracion, console.log
console.log(contarParesImpares([1,2,3,4,5,6,7,8,9]))


// Funcion 2:
// escribir una funcion que retorme true/false dependiente si el valor de entrada
// corresponde a un numero capicua. 121, 444, 3223. Solo permite analizar valores 
// de hasta 5 digitos(99999)
function verficarCapicua(numero){
    if(numero < 0 || numero > 99999){
        return false
    }

    let copia = numero
    let reverso = 0

    for(let i = 0; i < 5; i++){
        if (copia > 0){
            let ultimoDigito = copia % 10
            reverso = reverso * 10 + ultimoDigito
            copia = (copia - ultimoDigito) / 10
        }
    }

    if (numero === reverso){
        return true
    }else{
        return false
    }
}

//test, demostracion, console.log
console.log(verficarCapicua(3223))
console.log(verficarCapicua(123))

