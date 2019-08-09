function mostrar()
{
    var numero;
    var letra;
    var seguir;
    var cantidadPares;
    var contador;
    var cantidaImpares;
    var cantidadCeros;
    var acumuladorPositivo;
    var promedioPositivo;
    var contadorPositivo;
    var acumuladorNegativo;
    var flag;
    var numeroMaximo;
    var numeroMinimo;
    var letraMaximo;
    var letraMinimo;

    seguir = 's';
    cantidadPares = 0;
    contador = 0;
    cantidaImpares = 0;
    cantidadCeros = 0;
    acumuladorPositivo = 0;
    contadorPositivo = 0;
    acumuladorNegativo = 0; 
    flag = 0;


    do
    {
        numero = parseInt(prompt("Ingrese un numero entre -100 y 100"));
        while(isNaN(numero))
        {
            alert("Error, eso no es un numero");
            numero = parseInt(prompt("Reingrese numero"));
        }
        while(!(numero>-100 && numero<100))
        {
            alert("Error, numero incorrecto");
            numero = parseInt(prompt("Reingrese numero"));
        }

        letra = prompt("Ingrese alguna letra");

        if(numero%2 == 0)
        {
            cantidadPares++;
        }
        else
        {
            cantidaImpares++;
        }
        
        if(numero == 0)
        {
            cantidadCeros++;
        }

        if(numero > 0)
        {
            contadorPositivo++;
            acumuladorPositivo = acumuladorPositivo + numero;
            promedioPositivo = acumuladorPositivo / contadorPositivo;
        }
        else
        {
            acumuladorNegativo = acumuladorNegativo + numero;
        }

        if(flag == 0)
        {
            numeroMaximo = numero;
            numeroMinimo = numero;
            letraMaximo = letra;
            letraMinimo = letra;
        }

        if(numero > numeroMaximo)
        {
            numeroMaximo = numero;
            letraMaximo = letra;
        }
        
        if(numero < numeroMinimo)
        {
            numeroMinimo = numero;
            letraMinimo = letra;
        }

        seguir = prompt("Desea continuar: s/n");
        
        contador++;
        flag++;

    }while(seguir == 's');

    console.log("La cantidad de numeros pares es: " + cantidadPares);
    console.log("La cantidad de numeros impares es: " + cantidaImpares);
    console.log("La cantidad de ceros es: " + cantidadCeros);
    console.log("El promedio de los numeros positivos es: " + promedioPositivo);
    console.log("La suma de los negativos es: " + acumuladorNegativo);
    console.log("El numero maximo es: " + numeroMaximo+ " y  la letra es: " + letraMaximo);
    console.log("El numero minimo es: " + numeroMinimo + " y la letra es: " + letraMinimo);

}
