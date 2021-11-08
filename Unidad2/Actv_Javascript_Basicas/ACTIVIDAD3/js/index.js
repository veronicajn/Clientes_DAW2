//==============ACTIVIDAD 10===========================
function calculos(n1,n2){
    
    let opcion;
    let resultado=0;
   opcion = prompt("Si quiere multiplicar pulse 1, para dividir pulse 2");
    if(opcion == 1){
        n1 = prompt('Introduzca un número');
        n2 = prompt('Introduzca un número');
        resultado = n1*n2;
        alert(resultado)
    }else if(opcion == 2){
        n1 = prompt('Introduzca un número');
        n2 = prompt('Introduzca un número');
        resultado = n1/n2;
        alert(resultado)
    }
}
let num1;
let num2;
calculos(num1,num2);
