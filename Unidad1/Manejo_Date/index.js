//=====EJEMPLO MANEJO DATE=======================
function manejoDate(){
    //Crea una fecha con la fecha y hora del sistema
   let d = new Date();
   //Crea una fecha basandose en la cadena de fecha especificada
   d = new Date("October 13, 2014 11:13:00");
   //Crea una fecha indicando año, mes, dia, horas, minutos, segundos milisegundos
    d = new Date(99,5,24,11,33,30,0);
    //Crea una fecha indicando año, mes, dia
    d = new Date(99,5,24);
}

//=====ACTIVIDAD 1==============================
function fechaMayor(){
    alert("Introduzca la fecha en este formato: mes/dia/año")
    
    let fecha1 = new Date(prompt("Primera fecha"));
    let fecha2 = new Date(prompt("Segunda fecha"));
    if(fecha1 > fecha2){
        console.log("La primera fecha es mayor")
    }else{
        console.log("La segunda fecha es mayor")
    }
}

//=====ACTIVIDAD 2==============================
function restarFechas(){
    alert("Introduzca la fecha en este formato: mes/dia/año")
    
    let fecha1 = new Date(prompt("Primera fecha"));
    let fecha2 = new Date(prompt("Segunda fecha"));
    
    


    let resta = Math.abs(fecha2-fecha1);// la función Math.abs() distingue entre mayúsculas y minúsculas y no funcionará si se escribe de forma diferente
    console.log("Resultado de la resta: "+Math.round(resta/ (1000*3600*24))+" días")
}
//=====ACTIVIDAD 3================================
function MayoriaEdad(){
    alert("Introduzca la fecha en este formato: mes/dia/año")
    
    let fecha_nacimiento = new Date(prompt("Fecha de nacimiento"));
    let hoy = new Date();//Fecha actual
    //Realizamos la resta 
    let edad = hoy.getFullYear() - fecha_nacimiento.getFullYear();
    let m = hoy.getMonth() - fecha_nacimiento.getMonth();
        if (m < 0 || (m === 0 && hoy.getDate() < fecha_nacimiento.getDate())) {
            edad--;
        }
   
   //Hacemos la comparación
        if(edad >= 18){
            alert("Es mayor de edad ");
        }else{
            alert("Es menor de edad ");
        }
}



    

MayoriaEdad()
//1-Dadas dos fechas indicar cual fecha es mayor
//2-Restar dos fechas y dar resultado en dias
//3-Dos fechas y saber si es mayor o menor de 18