function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='s';
	var numero;

	while(respuesta!='n')
	{
		contador++;
		numero = prompt("Numero nuevo");
		numero = parseInt(numero);
		acumulador = numero + acumulador;
		respuesta = prompt("Desea continuar?"); 
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN