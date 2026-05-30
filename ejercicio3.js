function Reproductor() {
    this.estado = "detenido"

    this.play = function () {
        if (this.estado === "detenido" || this.estado === "pausado") {
            this.estado = "reproduciendo"
            return "Reproduciendo musica..."
        } else {
            return "Ya se esta reproduciendo musica."
        }
    }

    this.pausar = function () {
        if (this.estado === "reproduciendo") {
            this.estado = "pausado"
            return "Musica pausada."
        } else {
            return "No hay musica reproduciendose."
        }
    }

    this.detener = function () {
        this.estado = "detenido"
        return "Musica detenida."
    }
}

const reproductor1 = new Reproductor();

console.log(reproductor1.play());
console.log(reproductor1.play());
console.log(reproductor1.pausar());
console.log(reproductor1.detener());