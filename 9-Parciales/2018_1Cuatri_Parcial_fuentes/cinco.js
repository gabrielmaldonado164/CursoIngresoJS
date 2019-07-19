function mostrar()
{
    var planeta;
    var mensaje;
    
    planeta = prompt("Escriba un planeta del Sistema Solar");
    mensaje = "No es un planeta valido"

    
    switch(planeta){
        case"tierra":
            mensaje = "Aca es donde vivimos";
            break;
        
        case"mercurio":

        case"venus":
            mensaje = "Aca hace mas calor";
            break;

        case"marte":

        case"jupiter":

        case"saturno":

        case"urano":

        case"neptuno":
            mensaje = "Aca hace mas frio";
            break;   
    }
    alert(mensaje);
}
