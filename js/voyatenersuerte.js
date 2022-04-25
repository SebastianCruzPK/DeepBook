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
var contenido = document.querySelector('#contenido')
function traer() {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {
            console.log(data.results['0'])
            contenido.innerHTML =
                `<img src="${data.results['0'].picture.large}" class="img-fluid rounded-circle">
    <p>Nombre: ${data.results['0'].name.first}</p>
    <p>Apellido: ${data.results['0'].name.last}</p>
    <p>Ciudad: ${data.results['0'].location.city}</p>
    <p>Email: ${data.results['0'].email}</p>
    <p>Sexo: ${data.results['0'].gender}</p>
    <p>Edad: ${data.results['0'].dob.age}</p>
    <p>Id: ${data.results['0'].login.username}</p>`
        })
}
