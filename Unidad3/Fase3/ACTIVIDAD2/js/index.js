

function ocultaremail(nombre,email){
    let nombreusuario = prompt("Introduzca un nombre de usuario")
    if(nombre == nombreusuario ){
       alert("El nombre es correcto    "+email)
    }else{
        let correo =  email.substring(0,email.indexOf("_")-9,9)+email.substring(email.indexOf("@")-0,30);//Devuelve el correo
        let sustituir = email.substring(email.indexOf("@")-4,0)//Devuelve el principioo
        let ocultar = email.substring(15, email.indexOf("@")-3,email.length).replaceAll("[a-z]", "x")//posicion 3 antes del @
       
       
       alert(sustituir+ocultar.replace(/[a-z]/g,".")+correo)
    
    }
}
let nombre = "";
let email = "veronica_juarez@hotmail.com";
ocultaremail("Veronica",email);




