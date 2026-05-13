let form = document.getElementById("formulario");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let edad = document.getElementById("edad").value;
    let programa = document.getElementById("programa").value;

    if (nombre == "" && correo == "" && edad == "" && programa == "") {
        alert("Campos vacios");
        return;
    }
    if (edad <= 14) {
        alert("Edad no valida");
        return;
    }
    if (!correo.includes("@")) {
        alert("Correo no valido");
        return;
    }
    alert("Registro exitoso");

    document.getElementById("nombre").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("programa").value = "";
});