//Se require tenga las claves:
// 2 cadena
// 2 numerico (entero, decimal)
// 1 null
// 1 logica (false/ true)
// 1 array  (cadenas)
// 1 array  (objetos)
// 1 objeto  (arrays)
const pelicula = {
  titulo: "Matrix",
  director: "Lana y Lilly Wachowski",

  anio: 1999,
  recaudacion: 1632989141,

  premioMejorDirector: null,

  tieneSecuelas: true,

  generos: ["Ciencia ficción", "Acción"],

  actores: [
    { nombre: "Keanu Reeves", personaje: "Neo" },
    { nombre: "Laurence Fishburne", personaje: "Morfeo" },
    { nombre: "Carrie-Anne Moss", personaje: "Trinity" }
  ],

  produccion: {
    paises: ["Estados Unidos", "Australia"],
    idiomas: ["Inglés", "Italiano", "Ruso"]
  }
};

//¿Cúal es el ultimo elemento de IDIOMAS?
console.log(pelicula.produccion.idiomas[pelicula.produccion.idiomas.length - 1])

//¿Cúal es el personaje del primer actor?
console.log(pelicula.actores[0].personaje)

//¿Cúal es el rol del ultimo actor de la lista?
console.log(pelicula.actores[pelicula.actores.length - 1].personaje)


