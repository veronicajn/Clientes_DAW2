
function ManejoStrings(){
    let cadena = 'Veronica:Juarez:123456';
    let tfo;
    cadena = cadena.toLocaleUpperCase();
    alert(cadena);
    splitTodosCampos = cadena.split(";");
    split1Campo = cadena.split(":",1);
    alert(splitTodosCampos);
    alert(split1Campo);
    tfo = splitTodosCampos[2];
    //Cambio en el telefono los numeros 3 por 9
    tfo = tfo.replace("2","9");
    alert(tfo);

    //Muestra el quinto número del teléfono
    alert(tfo.charArt(4));
    alert("Bienvenido al CEEDCV");
}
ManejoStrings();