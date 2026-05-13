let form = document.getElementById("formulario");

form.addEventListener("submit", function(e){
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let nota1 = document.getElementById("nota1").value;
    let nota2 = document.getElementById("nota2").value;
    let nota3 = document.getElementById("nota3").value;

    if (nombre == "" && nota1 == "" && nota2 == "" && nota3 == "") {
        alert("Campos vacios");
        return;
    }

    // convertir a número
    nota1 = parseFloat(nota1);
    nota2 = parseFloat(nota2);
    nota3 = parseFloat(nota3);

    if (nota1 < 0 && nota1 > 5 || nota2 < 0 && nota2 > 5 || nota3 < 0 && nota3 > 5) {
        alert("Notas no validas");
        return;
    }

    let promedio = (nota1 + nota2 + nota3) / 3;

    if (promedio >= 3) {
        alert("Aprobado - Promedio: " + promedio);
    } else {
        alert("Reprobado - Promedio: " + promedio);
    }

    document.getElementById("nombre").value = "";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";
});