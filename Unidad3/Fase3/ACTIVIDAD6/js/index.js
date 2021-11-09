
//En la primera función nos devolverá la posición en la que se encuentra

function encontrarPalabra(frase){
let posicion = frase.indexOf("buen")
console.log("La palabra esta en la posicion: "+posicion)
}
encontrarPalabra("Hola buenos dias, hoy me siento bien")



//En la segunda función buscará la palabra y devolverá true o false
function encontrarPalabra2(frase){
let buscarpalabra = prompt("Introduzca una palabra: ")
if(frase.includes(buscarpalabra)){
    alert("La palabra  se encuentra en la frase")
}else{
    alert("La palabra no se encuentra en la frase")
}
}
encontrarPalabra2("Hola buenos dias, hoy me siento bien")