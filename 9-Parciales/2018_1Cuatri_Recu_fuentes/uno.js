
function mostrar()
{
    var ancho;
    var largo;
    var perimetro;

    ancho = parseInt(prompt("Ingrese numero"));
    largo = parseInt(prompt("Ingrese numero"));

    perimetro = (ancho + largo)*2;

    alert("El perimetro es: " + perimetro);
}
