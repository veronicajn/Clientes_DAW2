//==============ACTIVIDAD 17===========================
function difabsoluta(){
    let valor1 = prompt("Introduzca primer número");
    
    let a,  diferencia;
    let resultado=0;
    a = parseInt (valor1);
    diferencia = Math.abs(a-19);

    if(diferencia>19){
         let resultado = diferencia*diferencia*diferencia;
         alert(resultado);
    }else{
        
    alert (diferencia)
    }
}
difabsoluta();

