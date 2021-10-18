function Mostraralumno(){
    let valornombre = document.getElementById("nomusu").value;
    let valoredad = document.getElementById("edadusu").value;
  
    let nombrealumno = document.getElementById("nombre");
    nombrealumno = document.write("Nombre:"+valornombre);
    let edadalumno = document.getElementById("edad");
    edadalumno = document.write("</br>Edad:"+valoredad);
}
function MostrarEmpleado(){
    let empleado = document.getElementById("nombre").value;
    let sueldo = document.getElementById("salario").value;
    
    let nomemp = document.getElementById("mostrarnombre");
    nomemp = document.write("Nombre:"+empleado);
    let salaremp = document.getElementById("mostrarsalario");
    salaremp = document.write("</br>Salario:"+sueldo);
}

function UserEmail(){
    //nombre de usuario
    let nombre = document.getElementById("nombre").value;
    let usuario = document.getElementById("mostrarusuario");
   
    //validación de email-------------------------------
    let email = document.getElementById("email");
    console.log(email);
    let estructura = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
     if (estructura.test(email.value)) {
            
            console.log("Correcto")
            let correo = document.getElementById("mostrarcorreo");
            usuario = document.write("Nombre: "+ nombre);
            correo = document.write("</br>Email: "+ email.value)
        }

        else {
            alert("Correo incorrecto, repitalo de nuevo")
        }
}

function Cuadrado(){
    let valor = document.getElementById("valorlado").value;
    let resultado = 0;
    resultado = valor * 4;
    let perimetro = document.getElementById("perimetro");
    perimetro = document.write("El perímetro es : "+resultado);

    console.log(valor);
}


function Notas(){
    let nota1 = prompt('Introduzca nota 1');
    let nota2 = prompt('Introduzca nota 2');
    let nota3 = prompt('Introduzca nota 3');
    let resultado = 0;
    nota1 = parseInt(nota1);
    nota2 = parseInt(nota2);
    nota3 = parseInt(nota3);
    resultado = (nota1+nota2+nota3) / 3;
   
    let mostrar_resultado = document.getElementById("resultado_notas");
    if(resultado >= 7){
        mostrar_resultado = document.write('Promocionado');
    }else{
        mostrar_resultado = document.write('No promocionado');
    }
}