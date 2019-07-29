function mostrar()
{
	var contador=0;
	var positivo;
	var negativo;
	var respuesta='si';
	var acumulador=0;
	var acumuladorNegativo=0;

	while(respuesta!="no")
	{
		contador++;
		positivo = prompt("Ingrese numero");
		positivo = parseInt(positivo);
		negativo = parseInt(negativo);
		acumulador = acumulador + positivo;
		acumuladorNegativo= acumuladorNegativo * negativo;
		respuesta = prompt("Desea continuar?");


		
	}


document.getElementById('suma').value=acumulador;
document.getElementById('producto').value=acumuladorNegativo;

}//FIN DE LA FUNCIÓN