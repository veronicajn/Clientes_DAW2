
let input = document.getElementById("cuerpo")
input.addEventListener('mousedown', function(event){
    switch (event.which) {
        case 1:
            alert("Boton izquierdo")
            break;
        case 3:
         alert("Boton derecho")
        break;
    
        default:
            break;
    } 
})



