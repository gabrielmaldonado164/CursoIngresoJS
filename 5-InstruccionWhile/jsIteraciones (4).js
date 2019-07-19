function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	while(numero<0 || numero > 10) //while(numero>0 && numero<10) esta seria la forma correcta, siempre es lo contraio
	{
		numero = prompt("Error, intentelo de nuevo");
	}
		console.log("Correcto");
    


}//FIN DE LA FUNCIÓN