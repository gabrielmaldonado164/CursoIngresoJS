function mostrar()
{
    var precio;
    var porcentaje;
    var precioFinal;

    precio = parseInt(prompt("Ingrese precio"));
    porcentaje = parseInt(prompt("Ingrese porcentaje "));

    precioFinal = precio - (porcentaje * precio/100);

    document.getElementById("elPrecioFinal").value = precioFinal;
}
