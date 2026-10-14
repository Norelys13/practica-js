const Peliculas = [
  ["El conjuro", "IT", "La noche del demonio", "La monja", "Pesadilla en Elm Street"],
  ["Toy Story", " Frozen: Una aventura congelada", "Buscando a Nemo", "Shrek", "Coco"],
  ["Mi pobre angelito", "Las vacaciones de Mr. Bean", "La máscara", "Una pareja explosiva", "La pantera rosa"]
]

//Mostra las 15 peliculas en la consola
Peliculas.forEach(generoPeliculas => {
  generoPeliculas.forEach(peliculas => {
    console.log(peliculas)
  });
});