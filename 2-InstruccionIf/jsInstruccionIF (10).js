function mostrar()
	//Genero el número RANDOM entre 1 y 10 
{ 
	var aleatorio;
	aleatorio = Math.floor(Math.random()*10)+1;
	if(aleatorio>=9){
		alert("Nota: " + aleatorio + "Exelente");
	}

	else{
		if(aleatorio>=4){
			alert("Nota: " + aleatorio + " Aprobado");
		}
		else{
			alert("Nota: " + aleatorio + "Vamos, la proxima se puede");
		}
	}

}//FIN DE LA FUNCIÓN