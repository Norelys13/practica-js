// Crear un objeto que contenga informacion computador
// cadenas, enteros, decimales, logicos, arreglos, nuevos objetos

const computadora = {
  marca: "HP",                                      
  ramGB: 8,                                          
  pesoKg: 2.1,                                      
  tieneWifi: false,                                
  puertos: ["USB 2.0", "VGA", "Ethernet", "HDMI"],  
  componentes: [                                    
    { nombre: "Procesador", modelo: "AMD Ryzen 5" },
    { nombre: "Disco", modelo: "HDD 1TB" },
    { nombre: "Tarjeta de video", modelo: "NVIDIA GTX 1650" }
  ]
}

console.log(computadora)
console.log(computadora.marca)                
console.log(computadora.puertos[2])          
console.log(computadora.componentes[0].modelo)