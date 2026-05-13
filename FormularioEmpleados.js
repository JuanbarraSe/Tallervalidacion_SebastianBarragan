class Empleado {
    constructor(nombre, cargo, salario, horas){
        this.nombre = nombre;
        this.cargo = cargo;
        this.salario = salario;
        this.horas = horas;
    }

    calcularTotal(){
        let pagoExtra = this.horas * 10000;
        return this.salario + pagoExtra;
    }
}

let form = document.getElementById("formulario");

form.addEventListener("submit", function(e){
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let cargo = document.getElementById("cargo").value;
    let salario = document.getElementById("salario").value;
    let horas = document.getElementById("horas").value;

    if (nombre == "" && cargo == "" && salario == "" && horas == "") {
        alert("Campos vacios");
        return;
    }
    if (salario <= 0) {
        alert("Salario no valido");
        return;
    }
    if (horas < 0) {
        alert("Horas extras no validas");
        return;
    }
    let empleado = new Empleado(nombre, cargo, parseFloat(salario), parseInt(horas));

    let total = empleado.calcularTotal();

    alert("Salario total: " + total);

    document.getElementById("nombre").value = "";
    document.getElementById("cargo").value = "";
    document.getElementById("salario").value = "";
    document.getElementById("horas").value = "";
});