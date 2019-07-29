function mostrar()
{
	var contador=0;
	var acumulador=0;
	var respuesta='s';
	var numero;
	var promedio;

	do
	{
		numero = parseInt(prompt("Ingrese un numero: "));
		while(isNaN(numero))
		{
			alert("Error, eso no es un numero, ingrese nuevamente un numero");
			numero = parseInt(prompt("Ingrese un numero: "));
		}
		acumulador = numero + acumulador;
		respuesta = prompt("Desea continuar?"); 
		contador++;
		
	}while(respuesta!='n');

	promedio = acumulador / contador;
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN