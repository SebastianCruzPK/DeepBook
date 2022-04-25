$("#enviar").click(function(){
    $.get("https://randomuser.me/api/", 
    function(data){
        $.each(data.categories,(function (i, item) {
            $("#categorias").append("<tr><td>" + item.idCategory + "</td> <td>"+
            item.strCategory + "</td> <td> <img src ='" + item.strCategoryThumb + "'></td> <td>"+
            item.strCategoryDescription + "</td></tr>");
        }));
    });

});