function mostrar()
{
    var letra;
    var numero;
    var seguir;
    var cantidadNumerosPares;
    var cantidadNumerosImpares;
    var cantidadCeros;
    var promedioPositivo;
    var acumuladorPositivo;
    var contadorPositivo;
    var acumuladorNegativo;
    var numeroMaximo;
    var numeroMinimo;
    var letraMaxima;
    var letraMinimo;
    var contador;


    seguir = 's';
    cantidadNumerosPares = 0;
    cantidadNumerosImpares = 0;
    cantidadCeros = 0;
    acumuladorPositivo = 0;
    acumuladorNegativo = 0;
    contadorPositivo = 0;
    contador = 0;

    do
    {
        letra = prompt("Ingrese una leta");
        
        numero = parseInt(prompt("Ingrese numero entre -100 y 100"));
        
        while(isNaN(numero))
        {   
            alert("Error, no es un numero")
            numero = parseInt(prompt("Reingre numero"));
        }
        while(!(numero > -100 && numero < 100))
        {
            alert("Error, vuelva a escribir un numero");
            numero = parseInt(prompt("Reingrese numero"));
        }

        if(numero%2 == 0)
        {
            cantidadNumerosPares++;
        }
        else
        {
            if(numero%2 == 1 || numero == -1)
            {
                cantidadNumerosImpares++;
            }

            if(numero%10 == 0)
            {
                cantidadCeros++;
            }
        }

        if(numero > 0)
        {
            contadorPositivo++;
            acumuladorPositivo = acumuladorPositivo + numero;
            promedioPositivo = acumuladorPositivo / contadorPositivo;
        }
        else
        {
           if(numero < 0)
           {
               acumuladorNegativo = acumuladorNegativo + numero;
           } 
        }
       
        
            if(contador == 0)
            {
                numeroMaximo = numero;
                numeroMinimo = numero;
                letraMaxima = letra;
                letraMinimo = letra;
            }

            if(numero >= numeroMaximo)
            {
                numeroMaximo = numero;
                letraMaxima = letra;
            }

            if(numero <= numeroMinimo)
            {
                numeroMinimo = numero;
                letraMinimo = letra;
            }

            contador++;

            seguir = prompt("Desea continuar:s/n");

    }while(seguir == 's');
    //while(confirm("desea continuar ?"))

    console.log("La cantidad de numero pares es: " + cantidadNumerosPares);
    console.log("La cantidad de numeros impares es: " + cantidadNumerosImpares);
    console.log("La cantidad de ceros es: " + cantidadCeros);
    console.log("El promedio de los numeros positivos: " + promedioPositivo);
    console.log("La suma de todos los numeros negativos es: " + acumuladorNegativo);
    console.log("El numero maximo es: " + numeroMaximo + " y  la letra es:  " + letraMaxima);
    console.log("El numero mas bajo es: " + numeroMinimo + " y la letra es: " + letraMinimo);
}
