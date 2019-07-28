function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	while(!(numero>0 && numero<10)) //while(numero<0 || numero<10), esta seria la otra forma de hacerlo tambien
	//otra manera de hacerlo seria negarlo, osea pensarlo de la forma habitual y despues negarlo.
	{
		numero = prompt("Error, intentelo de nuevo");
	}
	console.log("Correcto");
    


}//FIN DE LA FUNCIÓN