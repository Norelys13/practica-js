// Formas de crear un funcion
// F1: Por declaracion
function hacerAlgo(){
  return "resultado"
}

//F2: Pore expresión
const saludo = function saludar (){
  return "Hola que tal"
}

console.log(saludo())

const suma = function sumar(num1, num2){
  return num1 + num2
}

console.log(suma(17, 20))

//Tipos de funciones: ANÓNIMA (funciones por expresión)
const mensaje = function (){
  return "Ingeneria de Software"
}

console.log(mensaje) // Tipo de dato => function
console.log(mensaje()); //Ejecuta la función

//AUTOEJECUTABLES (se declaran y se ejecutan al mismo tiempo). No olvidar ;
(function(){
  console.log("Hola que tal");
})();

(function(nombre = ''){
  console.log('Bienvenida:', nombre)
}
)('Katherine');

//Crea un funcion autoejecutable que calcule el preomedio de 3 notas
//Estas funciones sueled EJECUTAR TAREAS sin  retornar datos
(
  function (nota1, nota2, nota3){
    console((nota1 + nota2 + nota3) / 3)
  }
)(14, 12, 20);
