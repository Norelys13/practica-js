//Funcion asincrona
// Hacer una consula al API y obtener una lista de los planetas
// Mostrar únicamente los planetas que NO hayan sido destruidos (is Destroyed)
// los datos a mostrar son: name (id) Ejemplo: Monmar(6)
async function obtenerPlanetas() {
  const API_URL = "https://dragonball-api.com/api/planets/";
  try {
    const respuesta = await fetch(API_URL);
    if (!respuesta.ok) {
      throw new Error(`No hay comunicación con el servidor`);
    }
    const datos = await respuesta.json()
    const planetas = datos.items

    planetas.forEach(element => {
      
    });
  }

}