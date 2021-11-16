//==================ACTIVIDAD 4a================================================================


//Esta es una forma de hacerlo =========
function Fecha(){
    let fecha1 = prompt("Introduzca una fecha (año-mes-día): 0000-00-00")
    let cogermes = fecha1.substring(8,10);
      
switch (cogermes) {
    case "01":
        alert("El mes es Enero")
    break;
    case "02":
        alert("El mes es Febrero")
    break;
    case "03":
        alert("El mes es Marzo")
    break;
    case "04":
        alert("El mes es Abril")
    break;
    case "05":
        alert("El mes es Mayo")
    break;
    case "06":
        alert("El mes es Junio")
    break;
    case "07":
        alert("El mes es Julio")
    break;
    case "08":
        alert("El mes es Agosto")
    break;
    case "09":
        alert("El mes es Septiembre")
    break;
    case "10":
        alert("El mes es octubre")
    break;
    case "11":
        alert("El mes es Noviembre")
    break;
    case "12":
        alert("El mes es Diciembre")
    break;

    default:
        alert("EL número del mes no es correcto")
        break;
}
 }

Fecha();


//Otra forma posible de hacerlo pero con Date()===============
function diasEnUnMes(mes, año) {
    console.log(new Date(año, mes, 0).getDate());
    }
diasEnUnMes(2,2019)