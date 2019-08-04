function mostrar()
{
    var precio;
    var descuento;
    var precioFinal;

    precio = parseInt(prompt("Ingrese precio"));
    descuento = parseInt(prompt("Ingrese descuento"));

    precioFinal = precio -(precio * descuento/100);

    document.getElementById("elPrecioFinal").value = precioFinal;



}
