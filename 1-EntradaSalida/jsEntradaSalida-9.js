/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	sueldo = document.getElementById("sueldo").value;

	var resultado;
	resultado = parseInt(sueldo)*10/100;
	document.getElementById("resultado").value=parseInt(sueldo)+parseInt(resultado);
	}
