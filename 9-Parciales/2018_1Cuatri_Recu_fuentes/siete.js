function mostrar()
{
    var nota;
    var sexo;
    var alumnos;
    var promedioNotas;
    var notaMasBaja;
    var sexoBajo;
    var cantidadVarones;
    var acumuladorNotas;

    alumnos = 0;
    cantidadVarones = 0;
    sumaNotas = 0;
    acumuladorNotas = 0;

    while(alumnos<5)
    {
        nota = parseInt(prompt("Ingrese nota"));
        while(isNaN(nota))
        {
            alert("Error, no es un numero");
            nota = parseInt(prompt("Reingrese nota"));
        }

        //nota < 0 || nota > 10 || isNaN(nota) tambien se puede hacer asi

        while(!(nota>1 && nota<10))
        {
            alert("Error, nota no valida");
            nota = parseInt(prompt())
        }
        
        sexo = prompt("Ingrese sexo:f/m").toLocaleLowerCase();
        while(!(sexo == 'f' || sexo == 'm'))
        {
            alert("Error, letras incorrectas");
            sexo = prompt("Reingrese letra");
        }
        
        acumuladorNotas = acumuladorNotas + nota;
        promedioNotas = acumuladorNotas / 5 ;
        
        if(alumnos == 0)
        {
            notaMasBaja = nota;
            sexoBajo = sexo;
        }
        
        if(notaMasBaja<nota)
        {
            notaMasBaja = nota;
            sexoBajo = sexo;
        }
        
        if(nota >= 6 && sexo == 'm')
        {
            cantidadVarones++;
        }
        
        alumnos++;
        //acumuladorNotas += nota;
    }
    document.write ("El promedio de la notas totales es: " + promedioNotas + "<br>");
    document.write("La nota mas baja es: " + notaMasBaja + " El sexo es: " + sexoBajo + "<br>");
    document.write("Cantidad de varones que la nota es mayor o igual a 6: " + cantidadVarones + "<br>");


}
