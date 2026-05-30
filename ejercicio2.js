function ListaCompras() {
    this.productos = []

    this.agregar = function (producto) {
        this.productos.push(producto)
    }

    this.mostrar = function () {

        let contador = 1

        for(let comida of this.productos){

            console.log(contador + ". " + comida);

            contador++
        }
    }
}

const producto1 = new ListaCompras();

producto1.agregar("Leche");
producto1.agregar("Huevos");
producto1.agregar("Arroz");

producto1.mostrar();