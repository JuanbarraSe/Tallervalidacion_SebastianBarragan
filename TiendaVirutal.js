let form = document.getElementById("formulario");

form.addEventListener("submit", function(e){
    e.preventDefault();

    let producto = document.getElementById("producto").value;
    let precio = document.getElementById("precio").value;
    let cantidad = document.getElementById("cantidad").value;

    if (producto == "" && precio == "" && cantidad == "") {
        alert("Campos vacios");
        return;
    }
    precio = parseFloat(precio);
    cantidad = parseInt(cantidad);

    if (precio <= 0) {
        alert("Precio no valido");
        return;
    }
    if (cantidad <= 0) {
        alert("Cantidad no valida");
        return;
    }

    let subtotal = precio * cantidad;
    let iva = subtotal * 0.19;
    let total = subtotal + iva;

    alert(
        "Subtotal: " + subtotal +
        "\nIVA: " + iva +
        "\nTotal: " + total
    );

    document.getElementById("producto").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("cantidad").value = "";
});