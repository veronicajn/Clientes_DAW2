
let input = document.getElementById('cogerinput')
document.addEventListener('keydown',input)


function obtenerbotones(event){
    console.log(event.code)//muestra las teclas pulsadas
   let codigo = event.which
   console.log(codigo)
 /*  
let tecla  = false
let ctrlKey = 17
   if(event.keyCode == ctrlKey){
       tecla = true
       alert("illo pulsaste control")
   }*/
}


//La actividad esta sin finalizar, creo que mi teclado no detecta 
//las teclas que no sean  letras o numericas.
//Con el evento which averiguo el numero de tecla que es
//Si el numero de tecla es igual al de control pues  corresponderia.
//Pero no me detecta ni control ni alt ni otras k no sean [a-z]o[1-9]
/*Si funcionase usaria este tipo de funcion

if(e.which == 17){
    accion que desee
} 
*/ 
