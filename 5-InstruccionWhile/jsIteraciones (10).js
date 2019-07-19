function mostrar()
{

	var contador=0;
	var numero;
	var numeroDos;
	var suma;
	alert(numero);
	//declarar contadores y variables 
	numeroDos = 12;
	suma=numero*numeroDos;
	alert(suma);
	
	suma=3;//bien
	suma="3";//bien
	suma="lalala";//eror
	

	while(isNaN(suma)||(suma<0)||(suma>10))
	{
		alert("error");
		suma = prompt("error,reingrese numero");
	}
	alert("Ingreso correcto" + suma);

	
	//if(isNaN(suma))
	//{
		//alert("error");
	//}
	//else{
		//alert("bien");
	//}

	//var respuesta="si";

	//while(respuesta!="no")
	



}//FIN DE LA FUNCIÓN