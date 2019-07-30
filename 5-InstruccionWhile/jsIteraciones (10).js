function mostrar()
{
	var sumaPositivo=0;
	var sumaNegativo=0;
	var cantidadPositivo =0;
	var cantidadNegativo =0;
	var cantidadCeros=0;
	var cantidadPar=0;
	var promedioPositivo=0;
	var promedioNegativo=0;
	var contador = 0;
	var respuesta = 's';
	var numero;
	var diferencia=0;
	do
	{
		numero = parseInt(prompt("Ingrese un numero"));
		while(isNaN(numero))
		{
			alert("Eso no es un numero, ingrese nuevamente un dato");
			numero = parseInt(prompt("Ingrese un numero"));
		}
		
		if(numero == 0)
		{
			cantidadCeros++; //esto es para que cuente cuantos 0 hay
		}
		if(numero > 0)
		{
			sumaPositivo = sumaPositivo + numero; // mediante este if veo si es positivo o negativo
			cantidadPositivo++;
		}
		else
		{
			sumaNegativo = sumaNegativo + numero;
			cantidadNegativo++;
		}
		if(numero%2 == 0) //con esto lo que hago es saber si es par, 
		{
			cantidadPar++;
		}

		respuesta = prompt("Desea continuar?");
		contador++;

	}while(respuesta != 'n');


	promedioPositivo = sumaPositivo / cantidadPositivo;
	promedioNegativo = sumaNegativo / cantidadNegativo;
	diferencia = sumaPositivo + sumaNegativo;


	console.log("El promedio positivo es: " + promedioPositivo);
	console.log("El promedio negativo es :" + promedioNegativo);
	console.log("La diferencia es: " + diferencia);
	console.log("La suma de positivos es: " + sumaPositivo);
	console.log("La suma de negativos: " + sumaNegativo);
	console.log("La cantidad de ceros es: " + cantidadCeros);
	console.log("La cantidad de positivos es: " + cantidadPositivo);
	console.log("La cantidad de negativos es: " + cantidadNegativo );
	console.log("La cantidad par es: " + cantidadPar);

	//s

}//FIN DE LA FUNCIÓN