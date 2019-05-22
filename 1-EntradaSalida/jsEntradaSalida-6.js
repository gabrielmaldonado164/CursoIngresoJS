/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
 var numeroUno;
 numeroUno = document.getElementById("numeroUno").value;
 numeroUno = parseInt(numeroUno);

 var numeroDos;
 numeroDos = document.getElementById("numeroDos").value;
 numeroDos = parseInt(numeroDos);

 var resutado;
 resultado = (numeroUno) + (numeroDos);
 alert("La suma es "+ resultado);
}

