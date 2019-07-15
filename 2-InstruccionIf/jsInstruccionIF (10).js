function mostrar()
	//Genero el número RANDOM entre 1 y 10 
{
	var aleatorio;
	aleatorio = Math.floor(Math.random()*10)+1
	if(aleatorio>=9){
		alert("Tu nota es: " + aleatorio + " Exelente");
	}
	else{
		if(aleatorio>=4 && aleatorio<9){
			alert("Tu nota es: " + aleatorio + "Aprobado");
		}
		else{
			alert("Tu nota es: " + aleatorio + " Vamos, la proxima se puede para notas menores a 4";)
		}
	}

}//FIN DE LA FUNCIÓN