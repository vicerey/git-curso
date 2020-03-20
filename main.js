var max = 200;

class Tarea {
    constructor(descripcion, prioridad) {
        this.descripcion = descripcion;
        this.prioridad = prioridad;
    }
    mostrar = (max, min) => {
        // Retorna un número aleatorio entre 0 (incluido) y 1 (excluido)
        let random = Math.random();
        console.log(this);
        console.log(random);
        return Math.floor(random * (max - min) + min);

    }

}

let Tarea1 = new Tarea("Ir de compras", "Alta");

console.log(Tarea1.mostrar(999, 1));