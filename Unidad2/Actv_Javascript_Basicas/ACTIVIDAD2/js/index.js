
//==============ACTIVIDAD 9===========================
function navidad(){
    //alert("Introduzca la fecha en este formato: mes/dia/año")
    //Podemos introducir una fecha o bien poner la fecha actual
    //let fecha1 = new Date(prompt("Introduzca fecha"));//Una fecha introducida por teclado
    let fecha1 = new Date();//Fecha actual
    let fecha2 = new Date("12/25/2021");
    
    


    let resta = Math.abs(fecha2-fecha1);// la función Math.abs() distingue entre mayúsculas y minúsculas y no funcionará si se escribe de forma diferente
    alert("Quedan: "+Math.round(resta/ (1000*3600*24))+" días para navidad");
}

navidad()
