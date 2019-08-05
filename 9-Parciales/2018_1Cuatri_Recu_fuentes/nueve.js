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

   
    
    seguir = 'f';
    contadorTemperaturaPares = 0;
    cantidadTemperaturaMenosCero = 0;
    banderaProducto = 0;
    flag = 0;


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
            pesoMinimo = pesoProducto
            marcaPesado = marcaProducto;
        }


        




        seguir = prompt("Desea continuar? s/n");


    }while(seguir == 'f')

    console.log("Contador pares " + contadorTemperaturaPares);
}   

