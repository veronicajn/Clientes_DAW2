//==============ACTIVIDAD 18===========================
function truenum(n1,n2){
    let valor1 = prompt("Introduzca un número")
    let valor2 = prompt("Introduzca un número")
    n1 = parseInt(valor1)
    n2 = parseInt(valor2)
    let resultado = n1+n2;

    if(resultado == 50||n1==50||n2==50){
        alert(true)
    }else{
        alert(false)
    }
}
truenum(num1,num2)

