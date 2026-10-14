const persona = {
  apellidos: "Francia Minaya",
  nombres: "Jhon Edward",
  hablar: function() { return "Hola que tal" },
  locacion: {
    departamento: "Ica",
    provincia: "Chincha",
    distrito: "Grocio Prado",
    direccion: "Calle San Martin 123",
    mostrar: function(){
      return `${this.departamento} - ${this.provincia} - ${this.distrito} - ${this.direccion}`
    }
  }
}

consola.log(persona.hablar())
consola.log(persona.locacion["departamento"])
consola.log(persona.locacion.mostrar())