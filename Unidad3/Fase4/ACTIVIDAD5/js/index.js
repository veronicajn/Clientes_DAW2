//==================ACTIVIDAD 18================================================================

//producto de valores de una matriz
function matriz(array){
   

       
        let resultado = 1; //Debe ser 1 porque todo multiplicado por 0 es 0
    for (let i = 0; i < array.length; i++) {
    
        resultado = resultado * array[i];
    }
        // 8*9*7 = 504
        console.log( "Al multiplicar todos los numeros del array se obtiene " + resultado);
}
let array = [8,9,7]
matriz(array);