function mostrar()
{
    var marcaProducto;
    var pesoProducto;
    var temperaturaProducto;
    var seguir;
    var contadorTemperaturaPares;
    var marcaPesado;
    var cantidadTemperaturaMenosCero;
    var flag;
    var pesoMaximo;
    var pesoMinimo;
    var promedioProductos;
    var acumuladorProductos;
    var contador;

   
    
    seguir = 's';
    contadorTemperaturaPares = 0;
    cantidadTemperaturaMenosCero = 0;
    banderaProducto = 0;
    flag = 0;
    acumuladorProductos = 0;
    contador = 0;



    do
    {
        marcaProducto = prompt("Ingrese marca del producto");
        pesoProducto = parseInt(prompt("Ingrese el peso del producto entre 1 y 100"));
        while(isNaN(pesoProducto))
        {
            alert("Error, no es un numero");
            pesoProducto = parseInt(prompt("Reingre el peso del producto"));
        }

        while(!(pesoProducto >=1 && pesoProducto <= 100))    
        {
            alert("Error, numero incorrecto");
            pesoProducto = parseInt(prompt("Reingrese el peso del producto"));
        }

        temperaturaProducto = parseInt(prompt("Ingrese temperatura entre -30 y 30"));

        while(isNaN(temperaturaProducto))
        {
            alert("Error, dato incorrecto");
            temperaturaProducto = parseInt(prompt("Reingrese la temperatura"));
        }

        while(!(temperaturaProducto>= -30 && temperaturaProducto <=30))
        {
            alert("Error, temperatura incorrecta");
            temperaturaProducto = parseInt(prompt("Reingrese temperatura"));
        }

        if(temperaturaProducto%2 == 0)
        {
            contadorTemperaturaPares++;
        }

        if( flag == 0)
        {
            pesoMaximo = pesoProducto;
            pesoMinimo = pesoProducto;
            marcaPesado = marcaProducto;
        }
        
        if(pesoProducto>pesoMaximo)
        {
        	pesoMaximo = pesoProducto;
        	marcaPesado = marcaProducto;
        }

        if(pesoProducto<pesoMinimo)
        {
        	pesoMinimo = pesoProducto;
        }


        if(temperaturaProducto <  0)
        {
        	cantidadTemperaturaMenosCero++;
        }


        contador++;
        flag++;

        acumuladorProductos = acumuladorProductos + pesoProducto;
        promedioProductos = acumuladorProductos / contador;

        seguir = prompt("Desea continuar? s/n");


    }while(seguir =='s');

    console.log("Contador pares " + contadorTemperaturaPares);
    console.log("Marca del producto mas pesado es: " + marcaPesado);
    console.log("Cantidad de productos menores a 0 grados: " +  cantidadTemperaturaMenosCero);
    console.log("El promedio de los productos es: "  + promedioProductos);
    console.log("El peso maximo es: " + pesoMaximo);
    console.log("El peso minimo es: " + pesoMinimo);
}

