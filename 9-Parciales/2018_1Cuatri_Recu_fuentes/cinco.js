function mostrar()
{
    var dia;
    var mensaje;

    dia = prompt("Ingrese nombre");
    mensaje = "No es un dia valido";

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
            mensaje = "a trabajar";
            break;
        default:
            mensaje = "No es un dia valido";
            break;
    }
    alert(mensaje);

}
