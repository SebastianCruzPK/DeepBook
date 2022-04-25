$("#rut").blur(function(){
    alert("se pierde el foco del rut");
});

$("#form1").submit(function(){
    var rut = $("#rut").val();

    if(rut.length == 0){
        alert("el rut no puede estar vacío");
        Event.preventDefault();
    }else{
        alert("se envía formulario");
    }

    
});

$(document).ready(function(){
    $('form').parsley();
});