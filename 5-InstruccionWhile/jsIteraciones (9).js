function mostrar()
{
	var contador = 0;
	var minimo;
	var maximo;
	var numero;
	var respuesta = 's';

	do
	{
		numero = parseInt(prompt("Ingrese un numero"));

		while(isNaN(numero))
		{
			alert("Eso no es un numero, ingrese nuevamente");
			numero = parseInt(prompt("Ingrese un numero"));
		}

		if(contador == 0)
		{
			maximo = numero; 
			minimo = numero;
		}
		else
		{
			if(numero > maximo)
			{
				maximo = numero;	
			}
			if(numero < minimo)
			{
				minimo = numero;
			}

		}
		respuesta = prompt("Desea continuar?");
		contador++;

	}while(respuesta!='n');

	document.getElementById("maximo").value=maximo;
	document.getElementById("minimo").value=minimo;
}//FIN DE LA FUNCIÓN