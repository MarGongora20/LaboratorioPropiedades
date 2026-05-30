function Carrito() {
    this.productos = []
    this.total = 0

    this.agregarProducto = function (nombre, precio) {
        this.productos.push(nombre)
        this.total += precio
    }

    this.calcularDescuento = function () {

        if (this.total > 100) {

            let descuento = this.total * 0.10
            let totalFinal = this.total - descuento

            return "Tiene un descuento del 10%. Total a pagar: $" + totalFinal

        } else if (this.total > 50 && this.total <= 100) {

            let descuento = this.total * 0.05
            let totalFinal = this.total - descuento

            return "Tiene un descuento del 5%. Total a pagar: $" + totalFinal

        } else {

            return "No tiene descuento. Total a pagar: $" + this.total

        }
    }
}

const carrito1 = new Carrito();

carrito1.agregarProducto("Teclado", 40);
carrito1.agregarProducto("Mouse", 30);
carrito1.agregarProducto("Monitor", 50);

console.log(carrito1.calcularDescuento());