//==================ACTIVIDAD 8================================================================


//Para hacer esta actividd me descargué el documento (moment.min.js) el cual te ayuda
//a la hora de hacer la operación
function difFechas(){
  
    var fecha1 = moment('2016-07-12');
    var fecha2 = moment('2018-08-01');
    
    console.log(fecha2.diff(fecha1, 'days'), ' dias de diferencia');

}difFechas()


//para obtener más información sobre que se puede hacer con moment, aquí está la documentación.
//https://momentjs.com/


//Otra forma de hacerlo es esta 

function fechas2(fecFin, fecInicio ){
   
    let dias = fecFin - fecInicio;
    
    console.log(dias/(1000*60*60*24) );
}
let fecha1 = new Date('2015-04-12').getTime();
let fecha2 = new Date('2018-02-10').getTime();
fechas2(fecha2, fecha1);
