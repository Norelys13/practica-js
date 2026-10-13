let frutas = ["Manzana", "Plátano", "Naranja", "Uva", "Fresa", "Piña", "Mango", "Sandía", "Pera", "Durazno", "Cereza", "Kiwi", "Limón", "Coco", "Melón", "Arándano", "Papaya", "Mandarina", "Palta", "Maracuyá"]

for (let i = (frutas.length - 1); i >= 0; i--){
}

let frutaBuscada = "Lima"
const resultado = frutas.find(fruta => fruta == frutaBuscada)
const encontrado = frutas.incluidas(frutaBuscada)
console.log(resultado, encontrado)