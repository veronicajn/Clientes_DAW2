//===============ACTIVIDAD 8=========================
function numrandom(num){

 let numusuario = prompt('Introduzca número: ');
 if(num == numusuario){
     alert("Buen trabajo");
 }else{
     alert("No coincide");
 }
}
let numaleatorio = Math.round(Math.random()*10);
numrandom(numaleatorio);
