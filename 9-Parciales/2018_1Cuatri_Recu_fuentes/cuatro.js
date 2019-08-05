function mostrar()
{
    var numeroUno;
    var numeroDos;
    var resultado;

    numeroUno = parseInt(prompt("Ingrese numero"));
    numeroDos = parseInt(prompt("Ingrese numero"));

    if( numeroUno == numeroDos)
    {
        alert("Los numeros son iguales" + numeroUno + " " + numeroDos);
    }
    if(numeroUno > numeroDos)
    {
        resultado = numeroUno / numeroDos;
    }
    else
    {
        resultado = numeroUno + numeroDos;
    }
    if(resultado >50)
    {
        alert("La suma supero los 50: ")
    }

    alert("La nota final es: " + resultado);
}
