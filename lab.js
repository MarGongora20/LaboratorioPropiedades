//Ejercicio 1
function Libro(titulo, autor) {
    this.titulo = titulo
    this.autor = autor

    prestado = false

    this.prestamo = function () {
        if (prestado === false) {
            prestado = true
            return "Este libro se encuentra disponible."    
        }else{
            return "Este libro ya esta prestado y no se encuentra disponible."
            prestado = false
        }
    }
}

const libro1 = new Libro("Relatos de un Naufrago","Gabo");
console.log(libro1.titulo, libro1.prestamo());
console.log(libro1.titulo, libro1.prestamo());
