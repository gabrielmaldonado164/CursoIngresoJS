function mostrar()
{
   var dia;
   var mensaje;

   dia = prompt("Ingrese dia de la semana")
   mensaje = "Dia no valido";

   switch(dia)
   {
       case"sabado":
       case"domingo":
            mensaje = "Buen finde";
            break;
       case"lunes":
       case"martes":
       case"miercoles":
       case"jueves":
       case"viernes":
            mensaje = "A laburar";
            break;
       default:
           break;
   }
   alert(mensaje);
}
