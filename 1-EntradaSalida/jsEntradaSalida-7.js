/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
	var numeroUno;
	numeroUno = document.getElementById("numeroUno").value;
	numeroUno = parseInt(numeroUno);

	var numeroDos;
	numeroDos = document.getElementById("numeroDos").value;
	numeroDos = parseInt(numeroDos);

	var resultadoSuma
	resultadoSuma = numeroUno + numeroDos;

	alert("La suma es " + resultadoSuma);
}

function restar()
{
	var numeroUno;
	numeroUno = document.getElementById("numeroUno").value;
	numeroUno = parseInt(numeroUno);				

	var numeroDos;
	numeroDos = document.getElementById("numeroDos").value;
	numeroDos = parseInt(numeroDos);

	var resultadoResta;
	resultadoResta = numeroUno  - numeroDos;

	alert("La resta es " + resultadoResta);
}

function multiplicar()
{ 
	var numeroUno;
	numeroUno = document.getElementById("numeroUno").value;
	numeroUno = parseInt(numeroUno);

	var numeroDos;
	numeroDos = document.getElementById("numeroDos").value;
	numeroDos = parseInt(numeroDos);

	var resultadoMultiplicar;
	resultadoMultiplicar = numeroUno * numeroDos;

	alert("La multiplcacion es " + resultadoMultiplicar);
}

function dividir()
{
	var numeroUno;
	numeroUno = document.getElementById("numeroUno").value;
	numeroUno = parseInt(numeroUno);

	var numeroDos;
	numeroDos = document.getElementById("numeroDos").value;
	numeroDos = parseInt(numeroDos);

	var resultadoDivision;
	resultadoDivision = numeroUno / numeroDos;

	alert("La division es " + resultadoDivision);
}

