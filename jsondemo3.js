// Crea una funcion que reciba el ID del planeta, haga uso del API Dragon Ball
// y retorne una lista de personaje(name - race - affiliation). Ejemplo: 1
// piccolo - Namejian - Z Fighter
// Ginyu - FRieza Race - Army of Frieza
// Dende - Name kian - Z Fighter
//...

const API_URL = 'https://dragonball-api.com/api/planets/1'

async function personajesPorPlaneta(idPlaneta) {

  try{
    const respuesta = await fetcha(`${API_URL}${idPlaneta}`)

    if (!respuesta.ok) {
      throw new Error(`No hay comunicación con el servidor`)
    }

    const datos = await respuesta.json()

    const personaje = datos.characters
    personaje.forEach(element => {
      console.log(`${element.name} - ${element.race} - ${element.affiliation}`)
    });

  } catch(e){
    console.error(`No se pudo concretar la operación: ${e}`)
  }
}

personajesPorPlaneta(2)