let form = document.getElementById("formulario");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let actual = document.getElementById("actual").value;
    let nueva = document.getElementById("nueva").value;
    let confirmar = document.getElementById("confirmar").value;

    if (actual == "" && nueva == "" && confirmar == "") {
        alert("Campos vacios");
        return;
    }
    if (nueva.length < 8) {
        alert("La contraseña debe tener minimo 8 caracteres");
        return;
    }
    if (nueva != confirmar) {
        alert("Las contraseñas no coinciden");
        return;
    }
    alert("Contraseña cambiada correctamente");

    document.getElementById("actual").value = "";
    document.getElementById("nueva").value = "";
    document.getElementById("confirmar").value = "";
});