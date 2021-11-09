

function Mayusculas(frase) 
{
    console.log( frase.replace(/\b[a-z]/g,c=>c.toUpperCase()));
}
Mayusculas("hola que tal estas")


