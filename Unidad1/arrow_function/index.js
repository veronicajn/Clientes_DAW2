
//=============================ACTIVIDAD 1 ARROW FUNCTION===========================
let random = (num) => {
    let random =Math.floor( Math.random() * (num - 1) + 0);
    console.log(random)
  
  }
  //el valor num está asignado en el html, si deseas cambiar el numero
  //máximo aleatorio se cambia alli
  




  
 //============================ACTIVIDAD 2 ARROW FUNCTION===========================

  //funciones operaciones========================
   
  let  valores = () => {
    let numero1 = document.getElementById('numero1').value
    numero1 = parseInt(numero1)

   let numero2 = document.getElementById('numero2').value
    numero2 = parseInt(numero2)
    
    let array =[numero1, numero2]
    return array
  }

   let  sumar = () => {
       let cont =  valores()
       console.log(cont[0]+cont[1]);   
  }
  //let boton = document.getElementById("botonsuma");
 // boton.addEventListener("onclick", sumar)
    let  restar = () => {
        let cont =  valores()
        console.log(cont[0]-cont[1])
    }

    let multiplicar = () => {
        let cont =  valores()
        console.log(cont[0]*cont[1])
    }
    let dividir = () => {
        let cont =  valores()
        console.log(cont[0]/cont[1])
    }
  
 
//============================ACTIVIDAD 3 ARROW FUNCTION===========================
//reutilizar infomap

function infomap(){

        let citypeople = [
            {ciudad : "Madrid",habitantes: 20000},
            {ciudad: "Barcelona", habitantes: 10000},
            {ciudad: "Cádiz", habitantes: 9000},
            {ciudad: "Málaga", habitantes: 8000}
        ]
       
    return citypeople
        
    } 
    let mayorhabt = () => {
        let contend =  contenidomap();
        let acum = 0
        let result = ''
        let result2 = ''
        
        for (let [key, value] of contend) {
        
            if(value > acum){
                acum = value;
                
                result = key +"  "+ acum
                
            }else if(value < acum){
                acum = value;
                
                result2 = key +"  "+ acum
            }
           
          }
          console.log(result)
      
    }

    let menorhabt = () => {
        let contend =  contenidomap();
        let acum = 0
        let result = ''
        let result2 = ''
        
        for (let [key, value] of contend) {
        
            if(value > acum){
                acum = value;
                
                result = key +"  "+ acum
                
            }else if(value < acum){
                acum = value
                
                result2 = key +"  "+ acum
            }
           
          }
         
       console.log(result2)
       
    }
  function mostrar(){
    let cont = menorhabt()
   
  }
  

    //reutilizar contenidomap
    function contenidomap(){
        let map = new Map();

        map.set("Madrid", 200),
        map.set("Barcelona",1000),
        map.set("Cádiz", 90000),
        map.set("Málaga",  80000)

        return map
    }
    let mostrartodo = () => {
        let contend =  infomap();
        
        contend.map(x => console.log(x))
    }

    let metodomaps = () => {
        let map = new Map();

        map.set("Madrid", 20000),
        map.set("Barcelona",10000),
        map.set("Cádiz", 9000),
        map.set("Málaga",  8000)
        console.log(map.size)
   
    }

    let borrarciudad = () => {
        let map = contenidomap()
        map.delete('Madrid')
        console.log(map)
    }
    let incorporarciudad = () => {
        let map = contenidomap()
        map.set('Córdoba', 13000)
        console.log("Hemos añadido Córdoba con 13000 habitantes")
        console.log(map)
    }