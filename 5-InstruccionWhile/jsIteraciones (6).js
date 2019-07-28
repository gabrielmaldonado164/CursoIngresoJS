function mostrar()
{

	var contador=0;
	var acumulador=0;
	var promedio;
	var numero;

	while(contador<5)
	{
		contador++;
		numero = prompt("Ingrese numero ");
		numero = parseInt(numero);
		acumulador = numero + acumulador;
	}
	promedio = acumulador / contador; //o se puede dividir por 5 



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN