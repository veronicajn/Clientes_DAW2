//==============ACTIVIDAD 15===========================
function diferencia(num1, num2){
    num1 = prompt("Introduzca un número")
    let diferencia = num1-num2;
    if (diferencia>13) {
        alert (diferencia*diferencia)
    }else{
        alert("La diferencia es menor que 13")
    }
}
diferencia(num1, 13)