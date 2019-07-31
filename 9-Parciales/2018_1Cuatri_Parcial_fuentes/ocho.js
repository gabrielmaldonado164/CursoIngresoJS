function mostrar()
{
    var respuesta;
    var cantidadPares;
    var cantidadImpares;
    var cantidadCeros;
    var promedioPositivos;
    var contadorPositivo;
    var contadorNegativo;
    var sumaPositivos;
    var sumaNegativos;
    var numeroMaximo;
    var numeroMinimo;
    var letraMaximo;
    var letraMIninimo;
    var letra;
    var numero;
    var contador;

    contadorPositivo = 0;
    contadorNegativo = 0;
    respuesta = 's';
    sumaNegativos = 0;
    sumaPositivos = 0;
    cantidadImpares = 0;
    cantidadCeros = 0;
    cantidadPares = 0;
    contador = 0;

    do
    {
        letra = prompt("Ingrese letra");
        numero = parseInt(prompt("Ingrese numero entre -100 y 100"));

        while(isNaN(numero))
        {
            alert("No es un numero");
            numero = parseInt(prompt("Ingrese numero entre -100 y 100"));
        }
        
        while(!(numero>-100 && numero<100))
        {
            alert("Numero incorrecto");
            numero = parseInt(prompt("Ingrese numero entre -100 y 100"));

        }

        if(numero%2 == 0)
        {
            cantidadPares++;
        }
        else
        {  
           if(numero %2==1 || numero ==-1)
            {
               cantidadImpares++;
               
            }

            if(numero == 0)
            {
                cantidadCeros++;
            }

            if(numero >0)
            {
                sumaPositivos = sumaPositivos + numero;
                contadorPositivo++;
            }
            else
            {
                sumaNegativos = sumaNegativos + numero;
                contadorNegativo;
            }
            
            if(numero == 0)
            {
                numeroMaximo = numero;
                numeroMinimo = numero;
                letraMIninimo = leta;
                letraMaximo = letra;
            }

            if(numero>numeroMaximo)
            {
                numeroMaximo = numero;
                letraMaximo = letra;
            }

            if(numero<numeroMinimo)
            {
                numeroMinimo = numero;
                letraMIninimo = letra;
            }

            respuesta = prompt("Quiere continuar: s/n");
        }
 

    }while(respuesta == 's');


}
