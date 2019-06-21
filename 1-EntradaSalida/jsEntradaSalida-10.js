/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{ 
	var importe; 
	importe = document.getElementById("importe").value;

	var resultado;
	resultado = parseInt(importe)*25/100;
	document.getElementById("resultado").value=parseInt(importe)-parseInt(resultado);
}
