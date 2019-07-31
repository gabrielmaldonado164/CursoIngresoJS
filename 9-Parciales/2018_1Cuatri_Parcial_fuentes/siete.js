function mostrar()
{   
    var notas; 
    var alumnos;
    var sexo;
    var promedio;
    var notaMasBaja;
    var cantidadVarones;
    var sumaNotas;
    var sexoMasBajo;

    alumnos = 0;
    notaMasBaja = 0;
    cantidadVarones = 0;
    sumaNotas = 0;
    sexo ='f';
    sexo = 'm';

    while(alumnos<5)
    {
        notas = parseInt(prompt("Ingrese una nota"));
        while(isNaN(notas))
        {
            alert("Error, eso no es un numero");
            notas = parseInt(prompt("Ingrese un numero"));
        }

        while(!(notas>0 && notas<=10))
        {
            alert("Eso es un numero muy grande");
            notas = parseInt(prompt("Reingrese nota"));
        }

        sexo = prompt("Indique sexo: f/m");

        while(!(sexo == 'f' || sexo == 'm'))
        {
            alert("Letras incorrectas");
            sexo = prompt("Escriba nuevamente una letra");
        }

        if(alumnos == 0)
        {
            notaMasBaja = notas;
            sexoMasBajo = sexo;
        }
        else
        {
            if(notas<notaMasBaja)
            {
                notaMasBaja = notas;
                sexoMasBajo = sexo;
            }

            if(sexo == 'm' && notas >= 6)
            {
                cantidadVarones++;
            }
        }

        alumnos++;

        sumaNotas = sumaNotas + notas;
        promedio = sumaNotas / alumnos;

    }

    alert("La suma de la notas es: " + sumaNotas + " y el promedio es: " + promedio);
    alert("La nota mas baja es: " + notaMasBaja + " y el sexo es " + sexoMasBajo);
    alert("la cantidad de varones con mayor o igual a 6 es: " + cantidadVarones);

}
