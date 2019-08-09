function mostrar()
{   
   var notas;
   var sexo;
   var alumnos;
   var acumuladorNotas;
   var promedio;
   var bandera;
   var notaMasBaja;
   var sexoBajo;
   var cantidadVarones;

   alumnos = 0;
   acumuladorNotas = 0;
   bandera = 0;
   cantidadVarones = 0;

   while(alumnos<5)
   {
       notas = parseInt(prompt("Ingrese nota del 1 a 10"));
       while(isNaN(notas))
       {
           alert("Error, no es un numero");
           notas = parseInt(prompt("Reingrese nota"));
       }
       while(!(notas>=1 && notas<=10))
       {
           alert("Error, nota no valida");
           notas = parseInt(prompt("Reingrese nota"));
       }
       sexo = prompt("Ingrese sexo: f/m");
       while(!(sexo == 'f' || sexo == 'm'))
       {
           alert("Error, dato erroneo");
           sexo = prompt("Reingrese sexo f/m");
       }

       acumuladorNotas = acumuladorNotas + notas;
       promedio = acumuladorNotas / 5;

       if(alumnos == 0)
       {
           notaMasBaja = notas;
           sexoBajo = sexo;
       }

       if(notas < notaMasBaja)
       {
           notaMasBaja = notas;
           sexoBajo = sexo;
       }

       if(notas >= 6 && sexo == 'm')
       {
           cantidadVarones++;
       }


       alumnos++;
     
   }
   console.log("El promedio total de la notas es: " + promedio);
   console.log("La nota mas baja es: " + notaMasBaja+ " y el sexo es: " + sexoBajo);
   console.log("La cantidad de varones con nota mayor o igual a 6 es: " + cantidadVarones);

}   
