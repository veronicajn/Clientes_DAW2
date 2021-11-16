//==================ACTIVIDAD 31================================================================
function valorAlto(array){
   console.log("El número más alto  es: " + array.reduce((n,m) => Math.max(n,m), -Number.POSITIVE_INFINITY)); // Sacamos el mayor
   
}
let array = [22,30,84,25,11,59];
valorAlto(array);