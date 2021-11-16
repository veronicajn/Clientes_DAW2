//==================ACTIVIDAD 6================================================================


//Una forma de hacerla es este método
function valorAlto() {

    var numeros = [3, 15, 1, 8, 99, 12, 6];
    var mayor = 0;

    for (let i = 0; i < numeros.length; i++) {

        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }

    }
    console.log(" ======Primera forma de hacerlo========");
    console.log("El número más alto es: "+ mayor);
}
valorAlto();


//Otra forma de hacerla es esta, donde podemos sacar el número más alto y el más bajo
function valorAltoyBajo(array){
    console.log("========Segunda forma de hacerlo=========");
    console.log("El número más alto  es: " + array.reduce((n,m) => Math.max(n,m), -Number.POSITIVE_INFINITY)); // Sacamos el mayor
    console.log("El número más bajo es: " + array.reduce((n,m) => Math.min(n,m), Number.POSITIVE_INFINITY)); // Sacamos el menor
}
let array = [22,3,4,5,1,9];
valorAltoyBajo(array);