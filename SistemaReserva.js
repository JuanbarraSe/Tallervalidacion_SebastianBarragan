let form = document.getElementById("formulario");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let personas = document.getElementById("personas").value;
    let fecha = document.getElementById("fecha").value;
    let hora = document.getElementById("hora").value;

    if (nombre == "" && personas == "" && fecha == "" && hora == "") {
        alert("Campos vacios");
        return;
    }
    if (personas <= 0) {
        alert("Numero de personas no valido");
        return;
    }
    alert("Reserva registrada correctamente");
    
    document.getElementById("nombre").value = "";
    document.getElementById("personas").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("hora").value = "";
});