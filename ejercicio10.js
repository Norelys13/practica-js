// Objetos = JSON (Javascript Object Notation)
// Estructura que guarda datos utilizando {key: value}

let perfil = {
  apellido: "Francia Minaya",
  nombres: "Jhon",
  edad: 42,
  telefono: ["123456789", "111222333", "956847125"],
  formacion: [
    {nivel: "Primaria", nombre: "San José", anio: 2000},
    {nivel: "Secundaria", nombre: "JPB", anio: 2005},
    {nivel: "Superior", nombre: "SENATI", anio: 2010}
  ],
  habilidades: [
    { skill: "Base de datos", herramientas: ["MySQL", "Oracle", "SQLite"] },
    { skill: "Lenguajes progrmación", herramientas: ["Javascript", "PHP", "Java", "C#", "Python"] },
    { skill: "Sistema operativos", herramientas: ["Windows", "Linux", "Android"] }
  ]
}

//Habilidades en programación
console.log(perfil.habilidades[1].herramientas)

//¿Cuál es el nombre del centro de formación secundaria?
console.log(perfil.formacion[1].nombre)

//¿Cuántos teléfonos tiene la persona?
console.log(perfil.telefono.length)

//Mostrar cada uno de los motores de base de datos
const lista = perfil.habilidades[0].herramientas
lista.forEach(element => {
  console.log(element)
});