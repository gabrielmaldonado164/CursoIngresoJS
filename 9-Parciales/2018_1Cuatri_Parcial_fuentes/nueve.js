function mostrar()
{
    var marcaProducto;
    var pesoProducto;
    var temperatura;
    var cantidadTemperaturaPares;
    var marcaPesado;
    var cantidadMenosCero;
    var temperaturaProducto;
    var promedioProducto;
    var sumaProducto;
    var contadorProducto;
    var pesoMaximo;
    var pesoMinimo;
    var siguiente;

    pesoProducto = 0;
    temperaturaProducto = 0;
    cantidadTemperaturaPares = 0;
    cantidadMenosCero = 0;
    promedioProducto = 0;
    contadorProducto = 0;
    sumaProducto = 0;
    siguiente = 's';

    do
    {
        marcaProducto = prompt("Ingrese la marca del producto");    
        pesoProducto = parseInt(prompt("Ingrese peso en 1 y 100"));

        while(isNaN(pesoProducto))
        {
            alert("Error, eso no es un numero");
            pesoProducto = parseInt(prompt("Ingrese el peso nuevamente"));
        }

        while(!(pesoProducto>=1 && pesoProducto<100))
        {
            alert("Numero no correspondiente, ingrese el peso entre 1 y 100");
            pesoProducto = parseInt(prompt("Ingrese el peso nuevamente"));
        }

        temperaturaProducto = parseInt(prompt("Ingrese temperatura entre  -30 y 30"));

        
    }while(siguiente == 's');

}
