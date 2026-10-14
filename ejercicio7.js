const paises = [
  ["Perú", "Estados Unidos", "Brasil"],
  ["Francia", "Italia", "España"],
  ["Japón", "China", "India"],
  ["Egipto", "Sudáfrica", "Marruecos"]
]

//Mostrar los paises de Asia (unicamente) utilizando foreach
paises[2].forEach(pais => {
  console.log(pais)
});

//Agregar 2 paises en  la lista de América
paises[0].push("Bolivia")
paises[0].push("Ecuador")

console.log("------------")

//
paises.forEach(pais => {
  console.log(pais)
});