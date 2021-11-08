//==============ACTIVIDAD 28===========================
function rango(n1,n2){
    let valor1 = prompt("Introduzca un número")
    let valor2 = prompt("Introduzca un número")
    n1 = parseInt(valor1)
    n2 = parseInt(valor2)

    if(n1>50||n1>90){
        alert("esta en el rango")
    }else if(n2>50||n2>90){
        alert("esta en el rango")
    }else{
        alert("No esta en el rango")
    }
}
rango(num1,num2)
