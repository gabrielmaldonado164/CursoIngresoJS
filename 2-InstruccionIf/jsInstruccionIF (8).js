function mostrar()
//tomo la edad  
{
var edad;
edad = document.getElementById("edad").value;
estadoCivil = document.getElementById("estadoCivil").value;
if (edad<18 && edad!="soltero") 
{
	alert("No hacer nada");
}
else(edad>18 && edad=="soltero")
{
	alert("Es soltero y no es menor");
}
}//FIN DE LA FUNCIÓN