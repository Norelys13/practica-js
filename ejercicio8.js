const alimentos = [
  ["manzana", "pera", "plátano", "uva", "fresa"],
  ["zanahoria", "lechuga", "tomate", "cebolla"],
  ["pollo", "res", "cerdo"],
  ["arroz", "avena"]
]

//¿Cuántos elementos tiene la matriz?
console.log("Total elementos matriz:", alimentos.length)

//¿Cuál es el array de la matriz que tiene más datos?}
let mayor = 0
alimentos.forEach(categoriaAlimentos => {
  if (categoriaAlimentos.length > mayor){
    mayor = categoriaAlimentos.length
  }
});

console.log("Array más grande contiene:", mayor)

//¿Cúal es el array de la matriz que tiene menos datos?
let menor = alimentos[0].length
alimentos.forEach(categoriaAlimentos => {
  if (categoriaAlimentos.length < menor){
    menor = categoriaAlimentos.length
  }
 });

 console.log("Array más pequeño contiene:", menor)
//¿Cuántos elementos en total tiene la matriz? considerando todos los arreglos
let sumatoria = 0
alimentos.forEach(categoriaAlimentos => {
  sumatoria += categoriaAlimentos.length
});
console.log("En total tenemos:", sumatoria, "alimentos")