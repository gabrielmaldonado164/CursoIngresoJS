function mostrar()
{
    var numeroUno;
    var numeroDos;
    var resultado;

    numeroUno = parseInt(prompt("Ingrese el primer numero"));
    numeroDos = parseInt(prompt("Ingrese el segundo numero"));

    if(numeroUno == numeroDos)
    {
       alert("Numeros iguales" + numeroUno + "+ " + numeroDos);
    }

    if(numeroUno>numeroDos)
    {
        resultado = numeroUno - numeroDos;
    }
    else
    {
        resultado = numeroUno + numeroDos;
    }

    if(resultado > 10)
    {
        alert("La suma es: " + resultado + " y supero eñ 10");
    }

    alert("El resultado es final es: " + resultado);
}
