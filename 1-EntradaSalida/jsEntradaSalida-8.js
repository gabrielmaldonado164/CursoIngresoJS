/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numeroUno;
	numeroUno = document.getElementById("numeroDividendo").value;

	var numeroDos;
	numeroDos = document.getElementById("numeroDivisor").value;

	var resultadoResto;
	resultadoResto = numeroUno % numeroDos;

	alert("El resto es " + resultadoResto);
}
