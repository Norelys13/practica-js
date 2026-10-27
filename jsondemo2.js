// PASO 1: URL (endpoint)
const API_URL = 'https://dragonball-api.com/api/characters/4'

// PASO 2: Función asíncrona (tiempos distintos/diferidos) - Latencia
async function obtenerPersonaje() {

  // PASO 3: App es propensa a errores...
  try{

    // PASO 4: Realizar la petición
    const respuesta = await fetch(API_URL)

    // PASO 5: ¿Existe una respuesta?
    if(!respuesta.ok){
      throw new Error(`No hay comunicación con el servidor`) //!Stop¡
    }

    // PASO 6: Si llegamos hasta aqui, entonces hemos recicbido los datos (JSON)
    const datos = await respuesta.json()

    // PASO 7
    console.log(datos)

    const transformaciones = datos.transformations
    transformaciones.forEach(element => {
      console.log(element.name)
    })

  }catch(e){
    console.error(`No se pudo concretar la operación: ${e}`)
  }
  }

  //TEST
  obtenerPersonaje()