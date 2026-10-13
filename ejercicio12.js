function saludar(){
  console.log("Hola")
}

function despedirse(){
  return "adios"
}

function verificarNota(calificacion){
  //aprobado - desaprobado
  return calificacion >= 10.5 ? "aprobado" : "desaprobado"
}

function calcularNeto(sueldoBasico, numeroHijos){
  return sueldoBasico + (numeroHijos * 150)
}

//>= 65 "jubilacion activa", contrario, "fase laboral"
function verificarJubilacion(edad){
  if (edad >= 65){
    return "jubilacion activa"
  }else{
    return "fase laboral"
  }
}

function analizarSueldos(listaSueldos = [], obtenerMayor = true){
  let resultado = 0

  if (obtenerMayor){
  listaSueldos.forEach(sueldo => {
    if (sueldo > resultado) resultado = sueldo
  })
  }else{
    resultado = listaSueldos[0]
    listaSueldos.forEach(sueldo => {
      if (sueldo < resultado) resultado = sueldo
    });
  }
  return resultado
}

function obtenerTelefonos(perfil = {}){
  return[]
}

function crearObjeto(apellidos = '', nombre = '', edad = 0){
  return {
    apellidos: apellidos,
    nombres: nombre,
    edad: edad
  }
}

saludar()
console.log(despedirse())
console.log(verificarNota(16))
console.log(calcularNeto(3500, 2))
console.log(verificarJubilacion(45))
console.log(analizarSueldos([3500, 1800, 4100, 2200], false))

const perfil = {
  nombres: "Luis Mateo",
  dni: "126333000",
  telefonos: ["956222000", "651988333"]
}
console.log(obtenerTelefonos(perfil))