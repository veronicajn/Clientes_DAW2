//==============================ACTIVIDAD 1====================================================
class Alumno {
    constructor(DNI, nombre, notaMedia) {
        this.DNI = DNI;
        this.nombre = nombre;
        this.notaMedia = notaMedia;
    }
    cambiarMediaAlumno(notaNueva) {
        this.notaMedia = notaNueva;
        this.mostrarCambio()
        return notaNueva;
    }
    mostrarCambio() {
        return alert("Se ha cambiado la nota media de " + this.nombre + " a " + this.notaMedia)
    }
}

class Colegio {
    constructor(nombre, numAulas, numeroAlumnos) {
        this.nombre = nombre;
        this.numAulas = numAulas;
        this.numeroAlumnos = numeroAlumnos;
        this.alumnos = new Array();

    }

    cargarAlumnos() {
        for (let i = 0; i < this.numeroAlumnos; i++) {
            let nota = Math.ceil(Math.random() * (10 - 1) + 1);
            let addAlumno = new Alumno(i, nombres[i], nota);
            this.alumnos.push(addAlumno);
        }
        this.mostrarAlumnosConsola();
    }

    cambiarNotaMedia() {
        let name = document.getElementById("alumno").value;
        let nota = document.getElementById("notaNueva").value;
        nota = parseInt(nota);
        for (let i = 0; i < this.alumnos.length; i++) {
            if (this.alumnos[i].nombre == name) {
                this.alumnos[i].notaMedia = this.alumnos[i].cambiarMediaAlumno(nota);
                i = this.alumnos.length;
            }
        }
        this.mostrarAlumnosConsola();
    }

    mostrarAlumnosConsola() {
        console.log("Alumnos");
        console.log(this.alumnos)
        console.log("-----------------------")
    }

}




alert("Para ver las notas medias abre la consola para ver dichas notas de los alumnos")

let nombres = ["Paco", "Juan", "Fernando", "Sara", "Virginia", "Rosa"];
let colegio = new Colegio("I.E.S. Mar de Cádiz", 1, 6);

colegio.cargarAlumnos();




//==============================ACTIVIDAD 3====================================================
class Hospital {
    constructor(nombre, ciudad, numPacientes) {
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.numPacientes = numPacientes;
        this.pacientes = new Array();
    }
    cargarPacientes() {
        for (let i = 0; i < this.numPacientes; i++) {
            
            let addPaciente = new Paciente(dni[i], nombres[i], enfermedad[i]);
            this.pacientes.push(addPaciente);
        }
        this.mostrarPacientes();
    }
    mostrarPacientes() {
        console.log("Pacientes");
        console.log(this.pacientes);
        console.log("-----------------------")
    }
    darAlta(){
        
        let dni = document.getElementById('dnipaciente')
       
        for (let i = 0; i < this.pacientes.length; i++) {
             if(this.pacientes[i].dni === dni.value ){
               delete this.pacientes[i]
             }
        }
      
        this.mostrarPacientes();
    }
}

class Paciente {
    constructor(dni,nombre,enfermedad) {
        this.dni = dni;
        this.nombre = nombre;
        this.enfermedad = enfermedad;
       }
       
       

}


let nombrepaciente = ["Johnny", "Marta", "Rosa", "Pepe", "Juan", "Maria"];
let dni = ["5434543k","9595959l","9090909p","33344434w","1232123d","34352345r"]
let enfermedad = ["cardiovascular","Diabetes","neuronal","dialisis","pulmonar","covid-19"]
let hospital = new Hospital("Puerta del mar", "Cádiz",6);

hospital.cargarPacientes();




//==============================ACTIVIDAD 2====================================================



class Vuelo {
    constructor(codigo, hora_salida, hora_llegada) {
        this.codigo = codigo;
        this.hora_salida = hora_salida;
        this.hora_llegada = hora_llegada;
    }
}

class Aeropuerto {
    constructor(nombre, ciudad, numeroVuelosDiarios) {
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.numeroVuelosDiarios = numeroVuelosDiarios;
        this.vuelos = new Array();
    }
    cargarVuelos() {
        for (let i = 0; i < this.numeroVuelosDiarios; i++) {

            let vueloOut = Math.ceil(Math.random() * (10 - 0) + 0);
            let vueloIn = Math.ceil(Math.random() * (23 - 11) + 11)
            let minutos = Math.ceil(Math.random() * (59 - 0) + 0);

            let horaSalida = vueloOut + ":" + minutos;

            minutos = Math.ceil(Math.random() * (59 - 0) + 0);
            let horaLlegada = vueloIn + ":" + minutos;
            let avion = new Vuelo(i, horaSalida, horaLlegada);
            this.vuelos.push(avion);
        }
    }
    mostrarvuelos() {
        console.log(this.vuelos);
    }
    cambiarFechas() {
        let salida = document.getElementById("salida").value;
        let llegada = document.getElementById("llegada").value;
        let codigo = parseInt(document.getElementById("codigo").value);

        salida = salida.split(":");
        llegada = llegada.split(":");

        for (let i = 0; i < salida.length; i++) {
            salida[i] = parseInt(salida[i]);
            llegada[i] = parseInt(llegada[i]);
        }

        let resultado = this.comprobarFechas(codigo, salida, llegada);
        if (resultado) {
            for (let i = 0; i < this.vuelos.length; i++) {
                if (this.vuelos[i].codigo == codigo) {
                    this.vuelos[i].hora_salida = salida[0] + ":" + salida[1];
                    this.vuelos[i].hora_llegada = llegada[0] + ":" + llegada[1];
                    i = this.vuelos.length;
                }
            }
            cargarTablaVuelos();
            alert("Fechas cambiadas");

        } else {
            alert("Fallo a la hora de cambiar las fechas, revise si el código existe y que"
                + " la fecha de salida no sea menor que la fecha de llegada")
        }

    }
    comprobarFechas(codigo, salida, llegada) {
        let resultado = false
        for (let i = 0; i < this.vuelos.length; i++) {
            if (this.vuelos[i].codigo == codigo) {
                resultado = true;
            }
        }
        if (resultado) {
            if (salida[0] > llegada[0]) {
                console.log("Es menor")
                resultado = true;
            } else if (salida[0] == llegada[0]) {
                if (salida[1] > llegada[1]) {
                    console.log("salida es mayor");
                    resultado = true;
                }
            }
        }


        return resultado;
    }

}
//Imprimir en la tabla del html
const cargarTablaVuelos = () => {
    let contador = 0;
    let tablaVuelos = document.getElementById("tablaVuelos");
    tablaVuelos.innerHTML = "";
    tablaVuelos.border = 1;

    let cabecera = ["Código", "Hora de llegada", "Hora de Salida"];
    let cel1;
    let cel2;
    let cel3;
    let row;

    aeropuerto.vuelos.map((data) => {
        let code = document.createTextNode(data.codigo);
        let hs = document.createTextNode(data.hora_salida);

        row = tablaVuelos.insertRow(0);
        cel1 = row.insertCell(0);
        cel2 = row.insertCell(1);
        cel3 = row.insertCell(2);

        cel1.innerHTML = data.codigo;
        cel2.innerHTML = data.hora_salida;
        cel3.innerHTML = data.hora_llegada;
    })
    row = tablaVuelos.insertRow(0);
    cel1 = row.insertCell(0);
    cel2 = row.insertCell(1);
    cel3 = row.insertCell(2);
    cel1.innerHTML = "<b>" + cabecera[0] + "</b>";
    cel2.innerHTML = "<b>" + cabecera[1] + "</b>";
    cel3.innerHTML = "<b>" + cabecera[2] + "</b>";


}
let ciudades = ["Paris", "Alemania", "Londres", "Rumania", "Rusia"];
let aeropuerto = new Aeropuerto("Barajas ", "Madrid", 5);
aeropuerto.cargarVuelos()
cargarTablaVuelos();