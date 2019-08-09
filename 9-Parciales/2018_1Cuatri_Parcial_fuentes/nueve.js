function mostrar()
{
    var marcaProducto;
    var pesoProducto;
    var temperaturaProducto;
    var seguir;
    var cantidaTemperaturaPares;
    var marcaPesado;
    var pesoPesado;
    var pesoMaximo;
    var pesoMinimo;
    var flag;
    var cantidadMenosCeros;
    var acumuladorPeso;
    var promedioPeso;
    var contadorProductos;

    cantidaTemperaturaPares = 0;
    flag = 0;
    cantidadMenosCeros = 0;
    acumuladorPeso = 0;
    contadorProductos = 0;
    seguir = 's';

    do
    {   
        marcaProducto = prompt("Ingrese marca del producto");
        pesoProducto = parseInt(prompt("Ingrese el peso del producto entre 1 y 100"));
        while(isNaN(pesoProducto))
        {
            alert("Error, eso no es un numero");
            pesoProducto = prompt("Reingrese numero");
        }
        while(!(pesoProducto>= 1 && pesoProducto<=100))
        {
            alert("Error, numero incorrecto");
            pesoProducto = parseInt(prompt("Reingrese el peso"));
        }

        temperaturaProducto = parseInt(prompt("Ingrese temperatura entre -30 y 30"));
        while(isNaN(temperaturaProducto))
        {
            alert("Error, eso no es un numero");
            temperaturaProducto = parseInt(prompt("Reingrese temperatura"));
        }
        while(!(temperaturaProducto>= -30 && temperaturaProducto <= 30))
        {
            alert("Error, numero incorrecto");
            temperaturaProducto = parseInt(prompt("Reingrese temperatura"));
        }

        if(temperaturaProducto%2 == 0)
        {
            cantidaTemperaturaPares++;
        }

        if(flag == 0)
        {
            pesoMaximo = pesoProducto;
            pesoMinimo = pesoProducto;
            marcaPesado = marcaProducto;
        }

        if(pesoProducto > pesoMaximo)
        {
            pesoMaximo = pesoProducto;
            marcaPesado = marcaProducto;
        }

        if(pesoProducto < pesoMinimo)
        {
            pesoMinimo = pesoProducto;
        }

        if(temperaturaProducto < 0)
        {
            cantidadMenosCeros++;
        }
        flag++;
        contadorProductos++;

        acumuladorPeso = acumuladorPeso + pesoProducto;
        promedioPeso = acumuladorPeso / contadorProductos;

        seguir = prompt("Desea continuar: s/n");

    }while(seguir == 's');

    console.log("La cantidad de temperatura pares es: " + cantidaTemperaturaPares);
    console.log("La marca del producto mas pesado es: " + marcaPesado);
    console.log("La cantidad de productos con temperatura de menos cero es: " + cantidaTemperaturaPares);
    console.log("El promedio de todos los productos es: " + promedioPeso);
    console.log("El numero maximo es:" + pesoMaximo);
    console.log("El numero minimo es: " + pesoMinimo);
 
}
