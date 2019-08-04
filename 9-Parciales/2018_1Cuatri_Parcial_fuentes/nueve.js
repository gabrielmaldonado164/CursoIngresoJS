function mostrar()
{
    var marcaProducto;
    var pesoProducto;
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

    temperaturaProducto = 0;
    cantidadTemperaturaPares = 0;
    cantidadMenosCero = 0;
    promedioProducto = 0;
    contadorProducto = 0;
    sumaProducto = 0;
    pesoMaximo = 0;
    siguiente = 's';
    marcaProducto = 0;
    pesoMinimo = 0;
    pesoProducto = 0;

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

        while(isNaN(temperaturaProducto))
        {
            alert("Error, eso no es un numero");
            temperaturaProducto = parseInt(prompt("Ingrese temperatura entre -30 y 30"));
        }

        while(!(temperaturaProducto>-30 && temperaturaProducto<30))
        {
            alert("Numero no correspondiente, ingrese temperatura entre -30 y 30");
            temperaturaProducto = parseInt(prompt("Ingrese temperatura correcta"));
        }

        if(temperaturaProducto %2 == 0 )
        {
            cantidadTemperaturaPares++;
        }

        if(pesoProducto == 0)
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
            
        if(pesoProducto < pesoMinimo)
        {
            pesoMinimo = pesoProducto;
        }
        
                
        if(temperaturaProducto<0)
        {
            cantidadMenosCero++;
        }

        contadorProducto++;

        sumaProducto = sumaProducto + pesoProducto;
        promedioProducto = sumaProducto / contadorProducto;
        

        siguiente = prompt("Desea continuar? s/n");
        
    }while(siguiente == 's');

    console.log("La cantidad de temperatura pares es: " + cantidadTemperaturaPares);
    console.log("La marca del producto mas pesado es: " + marcaPesado);
    console.log("La cantidad de producto menores a 0 grados es:" + cantidadMenosCero);
    console.log("El promedio de los productos es: " + promedioProducto);
    console.log("El peso maximo es: "+pesoMaximo);
    console.log("El peso minimo es: " + pesoMinimo);

}
