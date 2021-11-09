
function contarsubcadena(frase){
    
    let contador = (frase.match(/es/g) || []).length;
    alert(contador)
}
contarsubcadena("El perro es bonito, es amable y es simpático")
