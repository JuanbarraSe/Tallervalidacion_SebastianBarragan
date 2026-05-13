let form = document.getElementById("formulario");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let peso = document.getElementById("peso").value;
    let estatura = document.getElementById("estatura").value;

    if (nombre == "" && edad == "" && peso == "" && estatura == "") {
        alert("Campos vacios");
        return;
    }
    peso = parseFloat(peso);
    estatura = parseFloat(estatura);

    if (peso <= 0 || estatura <= 0) {
        alert("Datos no validos");
        return;
    }
    let imc = peso / (estatura * estatura);
    let clasificacion = "";
    if (imc < 18.5) {
        clasificacion = "Bajo peso";
    } else if (imc >= 18.5 && imc < 25) {
        clasificacion = "Normal";
    } else {
        clasificacion = "Sobrepeso";
    }
    alert(
        "IMC: " + imc +
        "\nClasificacion: " + clasificacion
    );

    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("estatura").value = "";
});