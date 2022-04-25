


function valida_envia(){
    //valido el msj
    if (msj.length==0){
           document.getElementById("errorName").innerHTML = "El nombre no debe ser vacío";
          ;
    }
    if (opcion.selectedIndex==0){
        alert("Debe seleccionar un motivo de su contacto.")
        document.problema.opcion.focus()
        return 0;
 }

 //el formulario se envia
 alert("Muchas gracias por enviar el formulario");
 document.problema.submit();
}

$(document).ready(function(){
    $('form').parsley();
});


