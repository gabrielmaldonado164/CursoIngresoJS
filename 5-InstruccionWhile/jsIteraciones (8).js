function mostrar()
{
	var positivo=0;
	var negativo=1;
	var respuesta='s';
	var numero;
	var contadorNegativo=0;

	do
	{
		numero = parseInt(prompt("Ingrese un numero"));
		while(isNaN(numero))
		{
			alert("No es un numero");
			numero = parseInt(prompt("Ingrese un numero"));
		}

		if(negativo<0)
		{
			negativo  = negativo * numero;
			contadorNegativo++;
		}
		else
		{
			positivo = positivo + numero;
		}

		respuesta = prompt("Quiere ingresar otro numero?");

	}while(respuesta!="n");


document.getElementById('suma').value=positivo;
	if(contadorNegativo == 0)
	{
		negativo = 0;
	}
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN