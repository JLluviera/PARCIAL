function areaTotalGalpones(arrayGalpones) {
    let areasGalpones = 0;
    for (let galpon of arrayGalpones){
        areasGalpones += (galpon.largo * galpon.ancho);
    }
    return areasGalpones
}

function esSuficientementeGrande(superficieEdificio, maquinas) {
    let puedeInstalarse = 0;
    for (let maquina of maquinas){
        if (superficieEdificio >=  maquina.superficieDeOperacionRequerida) {
        puedeInstalarse++;
        }
    }
    return (puedeInstalarse > 0)
}

function filtrarInversoresVIP(arrayInversores) {
    let vip = [];
    for (let inversor of arrayInversores){
        if (inversor.capital >= 1000000){
            vip.push(inversor);
        }
    }
    return vip
}

function arrayLista(arrayRobots) {
    let lista = [];
    for (let robot of arrayRobots) {
        let listaHTML = document.createElement("li");
        let clase = robot.nombre = robot.nombre.replace(" ", "-");
        clase = clase.toLowerCase();
        listaHTML.setAttribute("class", clase);
        listaHTML.innerHTML = `${robot.nombre} : ${robot.cantidad}`; 
        lista.push(listaHTML);
    }
    return lista
}

class Robot {
    constructor ({nombre, velMax, autonomia}) {
        this.nombre = nombre;
        this.velMax = parseInt(velMax);
        this.autonomia = parseInt(autonomia);
    }

    mostrarDatos() {
        alert(`${this.nombre}, tiene una velocidad maxima de ${this.velMax} y una autonomia de ${this.autonomia} horas`);
    }

    modificarAutonomia(nuevaAut) {
        this.autonomia = nuevaAut;
        this.mostrarDatos()
    }

    static agregarAArreglo(array, robot) {
        let arregloNuevo = array.push(robot);
        return arregloNuevo
    }

    static calcularAutonomiaEnKm(robot) {
        let kilometros = robot.velMax * robot.autonomia;
        return kilometros
    }

    static crearDiv(robot1) {
        let div = document.createElement("div");

        let h1 = document.createElement("h1");
        h1.innerHTML = robot1.nombre;
        div.appendChild(h1);

        let parraf = document.createElement("p");
        parraf.innerHTML = `cuenta con una velocidad maxima de ${robot1.velMax}y una autonomia de ${robot1.autonomia}`
        div.appendChild(parraf);
    
        return div
    }
}